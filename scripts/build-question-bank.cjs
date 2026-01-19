#!/usr/bin/env node

/**
 * Builds question-bank.json from individual question files in public/bank/questions/
 * Run: node scripts/build-question-bank.js
 */

const fs = require('fs')
const path = require('path')

const questionsDir = path.join(__dirname, '../public/bank/questions')
const outputFile = path.join(__dirname, '../public/bank/question-bank.json')

// Read all question files
const files = fs.readdirSync(questionsDir).filter(f => f.endsWith('.json'))

console.log(`Found ${files.length} question files`)

const questions = { reading: [], math: [] }
const seenIds = new Set()
let duplicates = 0

files.forEach(file => {
  const filePath = path.join(questionsDir, file)
  const content = fs.readFileSync(filePath, 'utf8')

  try {
    const question = JSON.parse(content)
    const id = question.questionId || question.externalId || file.replace('.json', '')

    // Check for duplicates
    if (seenIds.has(id)) {
      console.log(`  Skipping duplicate: ${id}`)
      duplicates++
      return
    }
    seenIds.add(id)

    // Determine section
    const sectionId = question.sectionId ||
      (question.section?.toLowerCase() === 'math' ? 'math' : 'reading')

    // Add sequence number
    const sectionQuestions = questions[sectionId] || questions.reading
    question.displayNumber = String(sectionQuestions.length + 1)
    question.sequence = sectionQuestions.length
    question.sectionId = sectionId

    sectionQuestions.push(question)
    console.log(`  Added: ${id} (${sectionId})`)
  } catch (e) {
    console.error(`  Error parsing ${file}:`, e.message)
  }
})

// Build output structure
const output = []
if (questions.reading.length > 0) {
  output.push({ id: 'reading', items: questions.reading })
}
if (questions.math.length > 0) {
  output.push({ id: 'math', items: questions.math })
}

// Write output
fs.writeFileSync(outputFile, JSON.stringify(output, null, 2))

console.log(`\nBuilt question-bank.json:`)
console.log(`  Reading: ${questions.reading.length} questions`)
console.log(`  Math: ${questions.math.length} questions`)
console.log(`  Duplicates skipped: ${duplicates}`)
console.log(`  Total: ${questions.reading.length + questions.math.length} questions`)
