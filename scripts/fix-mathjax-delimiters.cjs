#!/usr/bin/env node

/**
 * Fix double-escaped MathJax delimiters in local question-bank.json
 * 
 * Usage:
 *   node scripts/fix-mathjax-delimiters.cjs
 * 
 * This fixes \\( -> \( and \\) -> \) in the question bank JSON file
 */

const fs = require('fs')
const path = require('path')

const questionBankPath = path.join(__dirname, '../public/bank/question-bank.json')

if (!fs.existsSync(questionBankPath)) {
  console.error(`Error: Question bank not found at ${questionBankPath}`)
  process.exit(1)
}

// Helper function to fix MathJax delimiters
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

console.log('Loading question bank...')
const questionBank = JSON.parse(fs.readFileSync(questionBankPath, 'utf8'))

console.log('Fixing MathJax delimiters...')
let fixedCount = 0

// Fix each question
questionBank.forEach((section, sectionIdx) => {
  if (section.items && Array.isArray(section.items)) {
    section.items.forEach((item, itemIdx) => {
      let wasFixed = false
      
      // Fix prompt
      if (item.prompt) {
        const original = item.prompt
        item.prompt = fixMathDelimiters(item.prompt)
        if (original !== item.prompt) wasFixed = true
      }
      
      // Fix passage
      if (item.passage) {
        const original = item.passage
        item.passage = fixMathDelimiters(item.passage)
        if (original !== item.passage) wasFixed = true
      }
      
      // Fix answer rationale
      if (item.answer?.rationale) {
        const original = item.answer.rationale
        item.answer.rationale = fixMathDelimiters(item.answer.rationale)
        if (original !== item.answer.rationale) wasFixed = true
      }
      
      // Fix answer choices
      if (item.answer?.choices) {
        const fixedChoices = fixMathInObject(item.answer.choices)
        if (JSON.stringify(item.answer.choices) !== JSON.stringify(fixedChoices)) {
          item.answer.choices = fixedChoices
          wasFixed = true
        }
      }
      
      if (wasFixed) {
        fixedCount++
      }
    })
  }
})

console.log(`Fixed ${fixedCount} question(s)\n`)

// Backup original file
const backupPath = questionBankPath + '.backup'
if (!fs.existsSync(backupPath)) {
  console.log('Creating backup...')
  fs.copyFileSync(questionBankPath, backupPath)
  console.log(`Backup created: ${backupPath}\n`)
}

// Write fixed file
console.log('Writing fixed question bank...')
fs.writeFileSync(questionBankPath, JSON.stringify(questionBank, null, 2))
console.log(`✓ Fixed question bank saved to ${questionBankPath}`)
console.log('\nNext steps:')
console.log('  1. Verify the fix looks correct')
console.log('  2. Run: node scripts/sync-questions-to-supabase.cjs')
console.log('     (This will sync the fixed data to production)')
