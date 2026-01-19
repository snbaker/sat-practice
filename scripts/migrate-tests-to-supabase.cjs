#!/usr/bin/env node

/**
 * Migrate test files from public/data/ to Supabase
 * 
 * Usage:
 *   node scripts/migrate-tests-to-supabase.cjs
 * 
 * Requires:
 *   - User must be authenticated in browser
 *   - Or use service_role key for server-side import
 *   - Supabase tests table created
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
  console.error('\nNote: This script requires authentication.')
  console.error('For server-side import, use the service_role key instead.')
  console.error('Or run this from the browser console after signing in.')
  process.exit(1)
}

const dataDir = path.join(__dirname, '../public/data')
const samplesManifest = path.join(dataDir, 'samples.json')

if (!fs.existsSync(samplesManifest)) {
  console.error(`Error: samples.json not found at ${samplesManifest}`)
  process.exit(1)
}

async function migrateTests() {
  console.log('Loading test files...')
  const manifest = JSON.parse(fs.readFileSync(samplesManifest, 'utf8'))
  
  const tests = []
  
  for (const filename of manifest.files) {
    const filePath = path.join(dataDir, filename)
    if (!fs.existsSync(filePath)) {
      console.warn(`  ⚠ Skipping ${filename} (not found)`)
      continue
    }
    
    try {
      const testData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      
      // Convert to Supabase format
      const sections = Array.isArray(testData) ? testData : testData.sections || []
      
      tests.push({
        name: filename.replace('.json', ''),
        generated: false,
        generation_type: null,
        category_code: null,
        sections: sections,
        is_public: false,
        shared_with: []
      })
      
      console.log(`  ✓ Loaded ${filename}`)
    } catch (error) {
      console.error(`  ✗ Error loading ${filename}:`, error.message)
    }
  }
  
  console.log(`\nFound ${tests.length} tests to migrate\n`)
  
  if (tests.length === 0) {
    console.log('No tests to migrate.')
    return
  }
  
  console.log('Migrating to Supabase...')
  console.log('Note: This requires authentication. The anon key will work if RLS allows inserts.')
  console.log('If you get permission errors, you may need to:')
  console.log('  1. Sign in via the app first')
  console.log('  2. Or use service_role key for server-side import\n')
  
  let successCount = 0
  let errorCount = 0
  
  for (const test of tests) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/tests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(test)
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error(`  ✗ Failed to migrate ${test.name}: ${response.status} ${response.statusText}`)
        console.error(`    ${errorText}`)
        errorCount++
      } else {
        const data = await response.json()
        console.log(`  ✓ Migrated ${test.name} (ID: ${data[0]?.id || 'unknown'})`)
        successCount++
      }
    } catch (error) {
      console.error(`  ✗ Error migrating ${test.name}:`, error.message)
      errorCount++
    }
  }
  
  console.log(`\n✓ Migration complete:`)
  console.log(`  Success: ${successCount} tests`)
  console.log(`  Errors: ${errorCount} tests`)
  
  if (errorCount > 0) {
    console.log('\nNote: Migration may have failed due to:')
    console.log('  - RLS policies (tests table requires authentication)')
    console.log('  - Missing user context (anon key needs user session)')
    console.log('\nAlternative: Import via browser console after signing in:')
    console.log('  1. Sign in to the app')
    console.log('  2. Open browser console')
    console.log('  3. Run: await migrateTestsFromData()')
    process.exit(1)
  }
}

migrateTests().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})
