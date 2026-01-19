// Supabase client and service for multi-user storage
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || ''
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})

// Auth helpers
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
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

  // Process in batches of 50
  const batchSize = 50
  const results = []
  
  for (let i = 0; i < questions.length; i += batchSize) {
    const batch = questions.slice(i, i + batchSize)
    const questionData = batch.map(q => ({
      id: q.questionId || q.id,
      section: q.sectionId || q.section || 'reading',
      prompt: q.prompt || '',
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

    if (error) {
      console.error(`Error syncing batch ${i}-${i + batch.length}:`, error)
      throw error
    }
    
    results.push(...(data || []))
  }
  
  return results
}

export async function getQuestions(filters = {}) {
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

  if (error) throw error
  
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
}

// Get question count
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
