/**
 * Browser-based migration script
 * Run this in the browser console after signing in
 * 
 * Usage:
 *   1. Sign in to the app
 *   2. Open browser console (F12)
 *   3. Copy and paste this entire script
 *   4. Run: migrateTestsFromData()
 */

async function migrateTestsFromData() {
  const { createTest } = await import('./src/services/supabase.js')
  
  // Load sample data manifest
  const manifestResponse = await fetch('/data/samples.json')
  if (!manifestResponse.ok) {
    console.error('Failed to load samples.json')
    return
  }
  
  const manifest = await manifestResponse.json()
  console.log(`Found ${manifest.files.length} test files to migrate\n`)
  
  let successCount = 0
  let errorCount = 0
  
  for (const filename of manifest.files) {
    try {
      const response = await fetch(`/data/${filename}`)
      if (!response.ok) {
        console.warn(`  ⚠ Skipping ${filename} (not found)`)
        continue
      }
      
      const testData = await response.json()
      const sections = Array.isArray(testData) ? testData : testData.sections || []
      
      const test = await createTest({
        name: filename.replace('.json', ''),
        generated: false,
        generationType: null,
        categoryCode: null,
        sections: sections,
        isPublic: false
      })
      
      console.log(`  ✓ Migrated ${filename} (ID: ${test.id})`)
      successCount++
    } catch (error) {
      console.error(`  ✗ Error migrating ${filename}:`, error.message)
      errorCount++
    }
  }
  
  console.log(`\n✓ Migration complete:`)
  console.log(`  Success: ${successCount} tests`)
  console.log(`  Errors: ${errorCount} tests`)
  
  return { successCount, errorCount }
}

// Export for use
window.migrateTestsFromData = migrateTestsFromData

console.log('Migration function loaded. Run: migrateTestsFromData()')
