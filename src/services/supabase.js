// Supabase client and service for multi-user storage
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || ''
// Supports both legacy (eyJ...) and new (sb_publishable_...) key formats
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || ''

// Create Supabase client
// Note: @supabase/supabase-js v2.18+ supports both legacy and new key formats
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})

// Auth helpers
export async function signUp(email, password) {
  // Use current window location for redirect URL
  const redirectTo = `${window.location.origin}/auth`
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: redirectTo
    }
  })
  if (error) throw error
  return data
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) throw error
  return data
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export function onAuthStateChange(callback) {
  return supabase.auth.onAuthStateChange(callback)
}

// Tests
export async function createTest(testData) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('tests')
    .insert({
      name: testData.name,
      created_by: user.id,
      generated: testData.generated || false,
      generation_type: testData.generationType,
      category_code: testData.categoryCode,
      sections: testData.sections || testData.data || [],
      is_public: testData.isPublic || false,
      shared_with: testData.sharedWith || []
    })
    .select()
    .single()

  if (error) throw error
  return data
}

// Migrate tests from public/data/ to Supabase
// Automatically detects new files and only migrates those not already in Supabase
export async function migrateTestsFromData() {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  // Load sample data manifest
  const manifestResponse = await fetch('/data/samples.json')
  if (!manifestResponse.ok) {
    throw new Error('Failed to load samples.json')
  }
  
  const manifest = await manifestResponse.json()
  console.log(`Found ${manifest.files.length} test files in data directory\n`)
  
  // Get existing tests to check for duplicates
  const existingTests = await getMyTests()
  const existingNames = new Set(existingTests.map(t => t.name))
  
  let successCount = 0
  let skippedCount = 0
  let errorCount = 0
  const results = []
  
  for (const filename of manifest.files) {
    const testName = filename.replace('.json', '')
    
    // Skip if already exists
    if (existingNames.has(testName)) {
      console.log(`  ⚠ Skipping ${filename} (already in Supabase)`)
      skippedCount++
      continue
    }
    
    try {
      const response = await fetch(`/data/${filename}`)
      if (!response.ok) {
        console.warn(`  ⚠ Skipping ${filename} (not found)`)
        skippedCount++
        continue
      }
      
      const testData = await response.json()
      const sections = Array.isArray(testData) ? testData : testData.sections || []
      
      const test = await createTest({
        name: testName,
        generated: false,
        generationType: null,
        categoryCode: null,
        sections: sections,
        isPublic: false
      })
      
      console.log(`  ✓ Migrated ${filename} (ID: ${test.id})`)
      results.push(test)
      successCount++
    } catch (error) {
      console.error(`  ✗ Error migrating ${filename}:`, error.message)
      errorCount++
    }
  }
  
  console.log(`\n✓ Migration complete:`)
  console.log(`  Success: ${successCount} new tests migrated`)
  console.log(`  Skipped: ${skippedCount} tests (already exist or not found)`)
  console.log(`  Errors: ${errorCount} tests`)
  
  return { successCount, skippedCount, errorCount, results }
}

// Clean up duplicate tests (keeps the most recent one for each name)
export async function cleanupDuplicateTests() {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  const tests = await getMyTests()
  const nameGroups = new Map()
  
  // Group tests by name
  tests.forEach(test => {
    if (!nameGroups.has(test.name)) {
      nameGroups.set(test.name, [])
    }
    nameGroups.get(test.name).push(test)
  })
  
  let deletedCount = 0
  const duplicates = []
  
  // Find duplicates (groups with more than 1 test)
  for (const [name, group] of nameGroups.entries()) {
    if (group.length > 1) {
      // Sort by created_at (most recent first)
      group.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      
      // Keep the first (most recent), delete the rest
      const toDelete = group.slice(1)
      duplicates.push({ name, keep: group[0].id, delete: toDelete.map(t => t.id) })
      
      for (const test of toDelete) {
        const { error } = await supabase
          .from('tests')
          .delete()
          .eq('id', test.id)
        
        if (error) {
          console.error(`Error deleting duplicate test ${test.id}:`, error)
        } else {
          deletedCount++
        }
      }
    }
  }
  
  console.log(`\n✓ Cleanup complete:`)
  console.log(`  Deleted ${deletedCount} duplicate test(s)`)
  console.log(`  Kept ${duplicates.length} unique test(s)`)
  
  return { deletedCount, duplicates }
}

export async function getTest(testId) {
  const { data, error } = await supabase
    .from('tests')
    .select('*')
    .eq('id', testId)
    .single()

  if (error) throw error
  return data
}

export async function getMyTests() {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('tests')
    .select('*')
    .eq('created_by', user.id)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data || []
}

export async function getPublicTests() {
  const { data, error } = await supabase
    .from('tests')
    .select('*')
    .eq('is_public', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data || []
}

export async function getAvailableTests() {
  const user = await getCurrentUser()
  
  if (!user) {
    // Not logged in - only public tests
    return getPublicTests()
  }

  // Get: my tests, public tests, tests shared with me
  const { data, error } = await supabase
    .from('tests')
    .select('*')
    .or(`created_by.eq.${user.id},is_public.eq.true,shared_with.cs.{${user.id}}`)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data || []
}

export async function updateTest(testId, updates) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('tests')
    .update(updates)
    .eq('id', testId)
    .eq('created_by', user.id)  // Only update own tests
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteTest(testId) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  const { error } = await supabase
    .from('tests')
    .delete()
    .eq('id', testId)
    .eq('created_by', user.id)  // Only delete own tests

  if (error) throw error
}

// Attempts
export async function createAttempt(testId, responses) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  // Get test to calculate score
  const test = await getTest(testId)
  if (!test) throw new Error('Test not found')

  let correctCount = 0
  let totalCount = 0

  test.sections.forEach(section => {
    section.items.forEach(item => {
      if (item.questionId) {
        totalCount++
        const userAnswer = responses[item.questionId]
        const correctAnswer = item.answer?.correctChoice
        if (userAnswer === correctAnswer) {
          correctCount++
        }
      }
    })
  })

  const { data, error } = await supabase
    .from('attempts')
    .insert({
      test_id: testId,
      user_id: user.id,
      responses,
      score: totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0,
      correct_count: correctCount,
      total_count: totalCount,
      completed_at: new Date().toISOString()
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getAttempt(attemptId) {
  const { data, error } = await supabase
    .from('attempts')
    .select('*')
    .eq('id', attemptId)
    .single()

  if (error) throw error
  return data
}

export async function getMyAttempts() {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('attempts')
    .select('*, test:tests(*)')
    .eq('user_id', user.id)
    .order('completed_at', { ascending: false })

  if (error) throw error
  return data || []
}

export async function getAttemptsForTest(testId) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  // Check if user owns the test or took it
  const test = await getTest(testId)
  if (!test) throw new Error('Test not found')

  const canView = test.created_by === user.id || 
                  test.is_public || 
                  (test.shared_with || []).includes(user.id)

  if (!canView) {
    // Only return user's own attempts
    const { data, error } = await supabase
      .from('attempts')
      .select('*')
      .eq('test_id', testId)
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false })

    if (error) throw error
    return data || []
  }

  // Return all attempts (user owns test or it's public)
  const { data, error } = await supabase
    .from('attempts')
    .select('*, user:users(id, email)')
    .eq('test_id', testId)
    .order('completed_at', { ascending: false })

  if (error) throw error
  return data || []
}

// Questions (from question bank - can sync from local)
export async function syncQuestions(questions) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  // Upsert questions (insert or update)
  const questionData = questions.map(q => ({
    id: q.questionId || q.id,
    section: q.sectionId || q.section || 'reading',
    prompt: q.prompt,
    passage: q.passage || null,
    answer: q.answer || {
      choices: {},
      correctChoice: null,
      rationale: null
    },
    metadata: q.metadata || {}
  }))

  const { data, error } = await supabase
    .from('questions')
    .upsert(questionData, { onConflict: 'id' })

  if (error) throw error
  return data
}

// Bulk sync questions (for initial import)
export async function bulkSyncQuestions(questions) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  // First, get existing question IDs to check for duplicates
  const { data: existingQuestions } = await supabase
    .from('questions')
    .select('id')
  
  // Normalize existing IDs (trim whitespace) for comparison
  const existingIds = new Set(
    (existingQuestions || []).map(q => String(q.id || '').trim().replace(/\s+/g, ''))
  )
  console.log(`Found ${existingIds.size} existing questions in database`)

  // Process in batches of 50
  const batchSize = 50
  const results = []
  let errorCount = 0
  let newCount = 0
  let updateCount = 0
  
  for (let i = 0; i < questions.length; i += batchSize) {
    const batch = questions.slice(i, i + batchSize)
    
    // Filter out questions without valid IDs and log them
    const validQuestions = batch.filter(q => {
      const id = q.questionId || q.id
      if (!id) {
        console.warn('Skipping question with no ID:', q)
        errorCount++
        return false
      }
      return true
    })
    
    if (validQuestions.length === 0) {
      console.warn(`Batch ${i}-${i + batch.length} had no valid questions, skipping`)
      continue
    }
    
    const questionData = validQuestions.map(q => {
      let id = String(q.questionId || q.id || '').trim() // Ensure ID is a string and trimmed
      
      // Normalize ID - remove any extra whitespace, ensure consistent format
      id = id.replace(/\s+/g, '') // Remove all whitespace
      
      if (!id || id === 'undefined' || id === 'null' || id === '') {
        throw new Error('Question missing required ID field')
      }
      
      return {
        id: id,
        section: q.sectionId || q.section || 'reading',
        prompt: q.prompt || '',
        passage: q.passage || null,
        answer: q.answer || {
          choices: {},
          correctChoice: null,
          rationale: null
        },
        metadata: q.metadata || {}
      }
    })
    
    // Count new vs updates and log new ones
    const newIds = []
    questionData.forEach(q => {
      if (existingIds.has(q.id)) {
        updateCount++
      } else {
        newCount++
        newIds.push(q.id)
      }
    })
    
    // Log new question IDs to help identify duplicates
    if (newIds.length > 0 && i === 0) {
      console.log('New question IDs (not found in existing):', newIds.slice(0, 5))
    }

    // Use upsert with proper conflict resolution
    // For TEXT primary keys, we need to ensure exact match
    const { data, error } = await supabase
      .from('questions')
      .upsert(questionData, { 
        onConflict: 'id'
      })
      .select('id')

    if (error) {
      console.error(`Error syncing batch ${i}-${i + batch.length}:`, error)
      throw error
    }
    
    // If data is returned, use it; otherwise count the batch as successful
    if (data && data.length > 0) {
      results.push(...data)
    } else {
      // Upsert succeeded but didn't return data (common with upsert)
      // Count the batch size as successful
      results.push(...new Array(questionData.length).fill({ synced: true }))
    }
  }
  
  if (errorCount > 0) {
    console.warn(`Skipped ${errorCount} questions due to missing IDs`)
  }
  
  console.log(`Sync summary: ${newCount} new, ${updateCount} updated`)
  
  return results
}

export async function getQuestions(filters = {}) {
  try {
    let query = supabase
      .from('questions')
      .select('*')

    if (filters.section) {
      query = query.eq('section', filters.section)
    }

    if (filters.domain) {
      query = query.eq('metadata->>domain', filters.domain)
    }

    if (filters.difficulty) {
      query = query.eq('metadata->>difficulty', filters.difficulty)
    }

    if (filters.search) {
      // Simple text search in prompt
      query = query.ilike('prompt', `%${filters.search}%`)
    }

    if (filters.limit) {
      query = query.limit(filters.limit)
    }

    if (filters.orderBy) {
      query = query.order(filters.orderBy, { ascending: filters.ascending !== false })
    }

    const { data, error } = await query

    if (error) {
      console.error('Supabase query error:', error)
      throw error
    }
    
    console.log(`Supabase query returned ${data?.length || 0} rows`)
    
    // Transform to match expected format
    return (data || []).map(q => ({
      questionId: q.id,
      externalId: q.id,
      section: q.section === 'reading' ? 'Reading' : 'Math',
      sectionId: q.section,
      prompt: q.prompt,
      passage: q.passage,
      answer: q.answer,
      metadata: q.metadata
    }))
  } catch (error) {
    console.error('Error in getQuestions:', error)
    throw error
  }
}

// Clear all questions from Supabase
export async function clearAllQuestions() {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')

  // Get all question IDs first
  const { data: allQuestions, error: selectError } = await supabase
    .from('questions')
    .select('id')
  
  if (selectError) {
    console.error('Error fetching questions:', selectError)
    throw selectError
  }
  
  if (!allQuestions || allQuestions.length === 0) {
    console.log('No questions to clear')
    return { success: true, count: 0 }
  }

  console.log(`Attempting to delete ${allQuestions.length} questions...`)

  // Delete questions in batches (Supabase has limits)
  const batchSize = 100
  let deletedCount = 0
  
  for (let i = 0; i < allQuestions.length; i += batchSize) {
    const batch = allQuestions.slice(i, i + batchSize)
    const ids = batch.map(q => q.id)
    
    const { error, count } = await supabase
      .from('questions')
      .delete()
      .in('id', ids)
      .select()

    if (error) {
      console.error(`Error deleting batch ${i}-${i + batch.length}:`, error)
      // Check if it's a permissions error
      if (error.message?.includes('permission') || error.message?.includes('policy')) {
        throw new Error('Permission denied: RLS policy does not allow deleting questions. You may need to add a DELETE policy or use a service role key.')
      }
      throw error
    }
    
    deletedCount += (count || batch.length)
    console.log(`Deleted batch ${Math.floor(i / batchSize) + 1}: ${batch.length} questions`)
  }

  console.log(`Successfully deleted ${deletedCount} questions`)
  return { success: true, count: deletedCount }
}

// Get question count
// Sync questions from local JSON file to Supabase (browser-based)
export async function syncQuestionsFromLocal() {
  try {
    // Load local question bank
    const response = await fetch('/bank/question-bank.json')
    if (!response.ok) {
      throw new Error('Failed to load local question bank')
    }
    const questionBank = await response.json()
    
    // Helper to fix MathJax delimiters
    const fixMathDelimiters = (str) => {
      if (!str || typeof str !== 'string') return str
      return str
        .split('\\\\(').join('\\(')
        .split('\\\\)').join('\\)')
        .split('\\\\[').join('\\[')
        .split('\\\\]').join('\\]')
    }
    
    const fixMathInObject = (obj) => {
      if (typeof obj === 'string') {
        return fixMathDelimiters(obj)
      } else if (Array.isArray(obj)) {
        return obj.map(fixMathInObject)
      } else if (obj && typeof obj === 'object') {
        const fixed = {}
        for (const [key, value] of Object.entries(obj)) {
          fixed[key] = fixMathInObject(value)
        }
        return fixed
      }
      return obj
    }
    
    // Transform questions to Supabase format
    const questions = []
    let skippedCount = 0
    
    questionBank.forEach(section => {
      (section.items || []).forEach((item, index) => {
        // Ensure we have a valid ID - generate one if missing
        const questionId = item.questionId || item.externalId || `generated-${section.id}-${index}-${Date.now()}`
        
        if (!questionId) {
          console.warn('Skipping question with no ID:', item)
          skippedCount++
          return
        }
        
        questions.push({
          questionId: questionId,
          id: questionId,
          sectionId: section.id === 'reading' ? 'reading' : 'math',
          section: section.id === 'reading' ? 'reading' : 'math',
          prompt: fixMathDelimiters(item.prompt || ''),
          passage: item.passage ? fixMathDelimiters(item.passage) : null,
          answer: {
            choices: fixMathInObject(item.answer?.choices || {}),
            correctChoice: item.answer?.correctChoice,
            correctAnswer: item.answer?.correctAnswer,
            rationale: item.answer?.rationale ? fixMathDelimiters(item.answer.rationale) : null
          },
          metadata: item.metadata || {}
        })
      })
    })
    
    if (skippedCount > 0) {
      console.warn(`Skipped ${skippedCount} questions with missing IDs`)
    }
    
    console.log(`Syncing ${questions.length} questions to Supabase...`)
    
    // Use bulkSyncQuestions to sync in batches
    const result = await bulkSyncQuestions(questions)
    const actualCount = questions.length // Use input count since upsert may not return data
    console.log(`Successfully synced ${actualCount} questions`)
    return { success: true, count: actualCount }
  } catch (error) {
    console.error('Error syncing questions:', error)
    throw error
  }
}

export async function getQuestionCount(filters = {}) {
  let query = supabase
    .from('questions')
    .select('*', { count: 'exact', head: true })

  if (filters.section) {
    query = query.eq('section', filters.section)
  }

  const { count, error } = await query

  if (error) throw error
  return count || 0
}

// Real-time subscriptions (optional)
export function subscribeToTest(testId, callback) {
  return supabase
    .channel(`test:${testId}`)
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'attempts',
      filter: `test_id=eq.${testId}`
    }, callback)
    .subscribe()
}

export function subscribeToMyTests(callback) {
  const user = getCurrentUser()
  if (!user) return null

  return supabase
    .channel('my-tests')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'tests',
      filter: `created_by=eq.${user.id}`
    }, callback)
    .subscribe()
}
