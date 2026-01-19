#!/usr/bin/env node

/**
 * Sync questions from local question-bank.json to Supabase
 * 
 * Usage:
 *   node scripts/sync-questions-to-supabase.cjs
 * 
 * Requires:
 *   - VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local
 *   - VITE_SUPABASE_SERVICE_ROLE_KEY in .env.local (recommended, bypasses RLS)
 *     OR update RLS policies to allow updates
 *   - Supabase questions table created
 */

const fs = require('fs')
const path = require('path')

// Load env vars from .env.local
const envPath = path.join(__dirname, '../.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/)
    if (match) {
      const key = match[1].trim()
      const value = match[2].trim()
      if (!process.env[key]) {
        process.env[key] = value
      }
    }
  })
}

const SUPABASE_URL = process.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY
const SUPABASE_SERVICE_ROLE_KEY = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Error: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set in .env.local')
  process.exit(1)
}

const questionBankPath = path.join(__dirname, '../public/bank/question-bank.json')

if (!fs.existsSync(questionBankPath)) {
  console.error(`Error: Question bank not found at ${questionBankPath}`)
  process.exit(1)
}

async function syncQuestions() {
  console.log('Loading question bank...')
  const questionBank = JSON.parse(fs.readFileSync(questionBankPath, 'utf8'))
  
  // Helper function to fix MathJax delimiters that might be double-escaped
  // When JSON is parsed, \( becomes \(, but if it was stored as \\(, it stays as \\
  const fixMathDelimiters = (str) => {
    if (!str || typeof str !== 'string') return str
    // Fix double-escaped delimiters: \\( -> \(, \\) -> \), \\[ -> \[, \\] -> \]
    return str
      .split('\\\\(').join('\\(')
      .split('\\\\)').join('\\)')
      .split('\\\\[').join('\\[')
      .split('\\\\]').join('\\]')
  }
  
  // Helper to recursively fix delimiters in objects
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
  
  // Flatten questions from all sections
  const questions = []
  questionBank.forEach(section => {
    (section.items || []).forEach(item => {
      questions.push({
        id: item.questionId || item.externalId,
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
  
  console.log(`Found ${questions.length} questions to sync`)
  
  // Check for service role key (for bypassing RLS)
  const SUPABASE_SERVICE_ROLE_KEY = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY
  const useServiceRole = !!SUPABASE_SERVICE_ROLE_KEY
  
  if (useServiceRole) {
    console.log('\nUsing service role key (bypasses RLS)...')
  } else {
    console.log('\nUsing anon key (requires RLS to allow inserts)...')
    console.log('Note: If you get permission errors, you can:')
    console.log('  1. Set VITE_SUPABASE_SERVICE_ROLE_KEY in .env.local (recommended for scripts)')
    console.log('  2. Or update RLS policies to allow inserts\n')
  }
  
  let successCount = 0
  let errorCount = 0
  const batchSize = 50
  const apiKey = useServiceRole ? SUPABASE_SERVICE_ROLE_KEY : SUPABASE_ANON_KEY
  
  for (let i = 0; i < questions.length; i += batchSize) {
    const batch = questions.slice(i, i + batchSize)
    console.log(`Syncing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(questions.length / batchSize)} (${batch.length} questions)...`)
    
    try {
      // Use PATCH with id=eq filter for upsert, or POST if service role key is available
      const method = useServiceRole ? 'POST' : 'PATCH'
      const url = useServiceRole 
        ? `${SUPABASE_URL}/rest/v1/questions`
        : `${SUPABASE_URL}/rest/v1/questions?id=eq.${batch[0].id}`
      
      // For PATCH, we need to update one at a time or use a different approach
      // Actually, let's use upsert via POST with service role, or individual PATCH requests
      if (useServiceRole) {
        // Use POST with upsert
        const response = await fetch(`${SUPABASE_URL}/rest/v1/questions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': apiKey,
            'Authorization': `Bearer ${apiKey}`,
            'Prefer': 'resolution=merge-duplicates'
          },
          body: JSON.stringify(batch)
        })
        
        if (!response.ok) {
          const errorText = await response.text()
          console.error(`Error syncing batch: ${response.status} ${response.statusText}`)
          console.error(errorText)
          errorCount += batch.length
        } else {
          successCount += batch.length
          console.log(`  ✓ Synced ${batch.length} questions`)
        }
      } else {
        // Use individual PATCH requests (one per question) since we can't batch upsert without service role
        let batchSuccess = 0
        for (const question of batch) {
          try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/questions?id=eq.${question.id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'apikey': apiKey,
                'Authorization': `Bearer ${apiKey}`,
                'Prefer': 'return=minimal'
              },
              body: JSON.stringify(question)
            })
            
            if (response.ok || response.status === 404) {
              // If 404, try POST to create
              if (response.status === 404) {
                const createResponse = await fetch(`${SUPABASE_URL}/rest/v1/questions`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'apikey': apiKey,
                    'Authorization': `Bearer ${apiKey}`
                  },
                  body: JSON.stringify(question)
                })
                if (createResponse.ok) {
                  batchSuccess++
                }
              } else {
                batchSuccess++
              }
            }
          } catch (err) {
            // Continue with next question
          }
        }
        if (batchSuccess > 0) {
          successCount += batchSuccess
          console.log(`  ✓ Synced ${batchSuccess}/${batch.length} questions`)
        } else {
          errorCount += batch.length
        }
      }
    } catch (error) {
      console.error(`Error syncing batch:`, error.message)
      errorCount += batch.length
    }
  }
  
  console.log(`\n✓ Sync complete:`)
  console.log(`  Success: ${successCount} questions`)
  console.log(`  Errors: ${errorCount} questions`)
  
  if (errorCount > 0) {
    console.log('\nNote: Some questions may have failed due to:')
    console.log('  - RLS policies (check that questions table allows inserts)')
    console.log('  - Duplicate IDs (questions already exist)')
    console.log('  - Invalid data format')
    process.exit(1)
  }
}

syncQuestions().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})
