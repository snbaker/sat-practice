/**
 * Helpers for reading SAT practice test data in the rich question-level format
 *
 * Rich format: [{ id: "reading"|"math", items: [{ answer: { correct }, ... }] }]
 */

const SECTION_NAMES = {
  reading: 'Reading & Writing',
  math: 'Math'
}

const MAX_SCORE_PER_SECTION = 800

/**
 * Checks if data is in the rich question-level format
 */
export function isRichFormat(data) {
  if (!Array.isArray(data)) return false
  if (data.length === 0) return false
  return data.some(section =>
    section.id &&
    Array.isArray(section.items) &&
    section.items.length > 0 &&
    section.items[0]?.answer !== undefined
  )
}

/**
 * Gets section statistics from a section in the rich format
 */
export function getSectionStats(section) {
  const items = section.items || []
  const correct = items.filter(item => item.answer?.correct).length
  const total = items.length
  const percentage = total > 0 ? correct / total : 0
  const score = Math.round(percentage * MAX_SCORE_PER_SECTION)

  return {
    id: section.id,
    name: SECTION_NAMES[section.id] || section.id,
    score,
    maxScore: MAX_SCORE_PER_SECTION,
    correct,
    total,
    percentage
  }
}

/**
 * Gets total score from rich format data
 */
export function getTotalScore(data) {
  if (!isRichFormat(data)) return null
  return data.reduce((sum, section) => sum + getSectionStats(section).score, 0)
}

/**
 * Gets all section stats from rich format data
 */
export function getAllSectionStats(data) {
  if (!isRichFormat(data)) return []
  return data.map(getSectionStats)
}
