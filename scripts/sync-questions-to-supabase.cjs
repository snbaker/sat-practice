#!/usr/bin/env node

/**
 * Sync questions from local question-bank.json to Supabase
 * 
 * Usage:
 *   node scripts/sync-questions-to-supabase.cjs
 * 
 * Requires:
 *   - VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local
 *   - Supabase questions table created
 *   - User must be authenticated (will prompt for login)
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
  
  // Flatten questions from all sections
  const questions = []
  questionBank.forEach(section => {
    (section.items || []).forEach(item => {
      questions.push({
        id: item.questionId || item.externalId,
        section: section.id === 'reading' ? 'reading' : 'math',
        prompt: item.prompt || '',
        passage: item.passage || null,
        answer: {
          choices: item.answer?.choices || {},
          correctChoice: item.answer?.correctChoice,
          correctAnswer: item.answer?.correctAnswer,
          rationale: item.answer?.rationale
        },
        metadata: item.metadata || {}
      })
    })
  })
  
  console.log(`Found ${questions.length} questions to sync`)
  
  // Note: This script uses the Supabase REST API directly since we're in Node.js
  // In a real scenario, you'd want to use the Supabase client with service_role key
  // For now, we'll use the anon key (requires RLS to allow inserts)
  
  console.log('\nSyncing to Supabase...')
  console.log('Note: This requires the questions table to allow inserts for authenticated users')
  console.log('If you get permission errors, check your RLS policies.\n')
  
  let successCount = 0
  let errorCount = 0
  const batchSize = 50
  
  for (let i = 0; i < questions.length; i += batchSize) {
    const batch = questions.slice(i, i + batchSize)
    console.log(`Syncing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(questions.length / batchSize)} (${batch.length} questions)...`)
    
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/questions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'resolution=merge-duplicates' // Upsert on conflict
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
