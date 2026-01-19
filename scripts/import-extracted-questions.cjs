#!/usr/bin/env node

/**
 * Import questions from extracted JSON file into individual question files
 * 
 * Usage:
 *   node scripts/import-extracted-questions.cjs [path-to-extracted-json]
 * 
 * Example:
 *   node scripts/import-extracted-questions.cjs "public/bank/incoming/sullivan_ela_1-50_extracted_questions.json"
 */

const fs = require('fs')
const path = require('path')

// Get input file(s) - can be a single file or pattern
const inputArg = process.argv[2]
const outputDir = path.join(__dirname, '../public/bank/questions')

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Determine which files to process
let inputFiles = []
if (inputArg) {
  // Single file specified
  const inputPath = path.isAbsolute(inputArg) 
    ? inputArg 
    : path.join(__dirname, '..', inputArg)
  
  if (fs.existsSync(inputPath)) {
    inputFiles = [inputPath]
  } else {
    console.error(`Error: Input file not found: ${inputPath}`)
    process.exit(1)
  }
} else {
  // No file specified - process all sullivan_ela_*_extracted_questions.json files
  const incomingDir = path.join(__dirname, '../public/bank/incoming')
  const allFiles = fs.readdirSync(incomingDir)
  inputFiles = allFiles
    .filter(f => f.startsWith('sullivan_ela_') && f.endsWith('_extracted_questions.json'))
    .map(f => path.join(incomingDir, f))
    .sort() // Process in order
}

if (inputFiles.length === 0) {
  console.error('Error: No input files found')
  process.exit(1)
}

console.log(`Found ${inputFiles.length} file(s) to process\n`)

// Process each file
let totalSaved = 0
let totalSkipped = 0
let totalFixed = 0

inputFiles.forEach((inputPath, fileIndex) => {
  console.log(`[${fileIndex + 1}/${inputFiles.length}] Processing: ${path.basename(inputPath)}`)
  
  const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'))

if (!data.items || !Array.isArray(data.items)) {
  console.error('Error: Expected JSON with "items" array')
  process.exit(1)
}

console.log(`Found ${data.items.length} questions\n`)

let saved = 0
let skipped = 0
let fixed = 0

data.items.forEach((question, index) => {
  if (!question.questionId) {
    console.log(`  ⚠ Skipping question ${index + 1} (no questionId)`)
    skipped++
    return
  }

  // Clean up the question
  const cleaned = { ...question }

  // Fix issues where correctChoice/rationale might be embedded in choice text
  if (!cleaned.answer.correctChoice || !cleaned.answer.rationale) {
    // Check if it's in one of the choice bodies
    for (const [key, choice] of Object.entries(cleaned.answer.choices || {})) {
      if (choice.body) {
        // Look for "Correct Answer: X" pattern
        const answerMatch = choice.body.match(/Correct Answer:\s*([A-D])/i)
        if (answerMatch && !cleaned.answer.correctChoice) {
          cleaned.answer.correctChoice = answerMatch[1]
          fixed++
        }

        // Look for "Rationale" section
        const rationaleMatch = choice.body.match(/Rationale\s+(.*?)(?=\s*(?:Choice [A-D]|$))/is)
        if (rationaleMatch && !cleaned.answer.rationale) {
          cleaned.answer.rationale = `<p>${rationaleMatch[1].trim()}</p>`
          fixed++
        }

        // Clean up the choice body if it contains answer/rationale
        if (answerMatch || rationaleMatch) {
          // Remove everything from "Correct Answer:" onwards
          cleaned.answer.choices[key].body = choice.body
            .replace(/\s*Correct Answer:.*$/is, '')
            .trim()
          
          // Ensure it still has <p> tags
          if (cleaned.answer.choices[key].body && !cleaned.answer.choices[key].body.startsWith('<p>')) {
            cleaned.answer.choices[key].body = `<p>${cleaned.answer.choices[key].body}</p>`
          }
        }
      }
    }
  }

  // Ensure prompt has <p> tags if it's a string
  if (cleaned.prompt && typeof cleaned.prompt === 'string' && !cleaned.prompt.startsWith('<p>')) {
    cleaned.prompt = `<p>${cleaned.prompt}</p>`
  }

  // Ensure rationale has <p> tags if it exists
  if (cleaned.answer.rationale && typeof cleaned.answer.rationale === 'string' && !cleaned.answer.rationale.startsWith('<p>')) {
    cleaned.answer.rationale = `<p>${cleaned.answer.rationale}</p>`
  }

  // Remove fields that shouldn't be in individual question files
  delete cleaned.displayNumber
  delete cleaned.sequence
  delete cleaned.sectionId

  // Save the question
  const filename = `${question.questionId}.json`
  const filePath = path.join(outputDir, filename)

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`  ⚠ Skipping ${filename} (already exists)`)
    skipped++
    return
  }

  fs.writeFileSync(filePath, JSON.stringify(cleaned, null, 2))
  saved++
  
  const status = cleaned.answer.correctChoice ? '✓' : '⚠'
  console.log(`  ${status} Saved: ${filename}${cleaned.answer.correctChoice ? '' : ' (no answer)'}`)
})

  totalSaved += saved
  totalSkipped += skipped
  totalFixed += fixed
  console.log(`  → Saved: ${saved}, Skipped: ${skipped}, Fixed: ${fixed} issues\n`)
})

console.log(`✓ Import complete:`)
console.log(`  Total saved: ${totalSaved} questions`)
console.log(`  Total skipped: ${totalSkipped} questions`)
console.log(`  Total fixed: ${totalFixed} issues`)
console.log(`\nRun 'npm run build:bank' to rebuild question-bank.json`)
