import { useState } from 'react'
import { isRichFormat } from '../utils/dataTransform'
import { getTopicMappings } from '../utils/topicMappings'

const SECTION_NAMES = {
  reading: 'Reading & Writing',
  math: 'Math'
}

export default function Analysis({ results }) {
  const [expandedCategories, setExpandedCategories] = useState({})

  if (!results || results.length === 0) {
    return (
      <div className="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Upload practice tests to see your performance breakdown!</span>
      </div>
    )
  }

  // Collect all questions from all results (only those with metadata)
  const questionsBySection = { reading: [], math: [] }
  let questionsWithoutMetadata = 0

  results.forEach(result => {
    const { data } = result
    if (!isRichFormat(data)) return

    data.forEach(section => {
      const sectionId = section.id
      if (questionsBySection[sectionId]) {
        section.items?.forEach(item => {
          if (item.metadata?.PRIMARY_CLASS_CD) {
            questionsBySection[sectionId].push(item)
          } else {
            questionsWithoutMetadata++
          }
        })
      }
    })
  })

  // Build stats for a category level
  const buildCategoryStats = (questions, categoryKey) => {
    const stats = {}

    questions.forEach(q => {
      const categoryValue = q.metadata?.[categoryKey] || 'Unknown'
      if (!stats[categoryValue]) {
        stats[categoryValue] = { total: 0, correct: 0, incorrect: 0, questions: [] }
      }
      stats[categoryValue].total++
      if (q.answer?.correct) {
        stats[categoryValue].correct++
      } else {
        stats[categoryValue].incorrect++
      }
      stats[categoryValue].questions.push(q)
    })

    return stats
  }

  const toggleCategory = (key) => {
    setExpandedCategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const getScoreColor = (correct, total) => {
    const pct = (correct / total) * 100
    if (pct >= 80) return 'text-success'
    if (pct >= 60) return 'text-warning'
    return 'text-error'
  }

  const renderCategoryStats = (stats, level, parentKey = '', sectionId = 'reading') => {
    const mappings = getTopicMappings(sectionId)
    const levelMappings = mappings[level] || {}

    const sortedEntries = Object.entries(stats).sort((a, b) => {
      // Sort by percentage correct ascending (worst first)
      const pctA = a[1].correct / a[1].total
      const pctB = b[1].correct / b[1].total
      return pctA - pctB
    })

    return (
      <div className="space-y-1">
        {sortedEntries.map(([category, data]) => {
          const key = `${parentKey}-${level}-${category}`
          const isExpanded = expandedCategories[key]
          const pct = Math.round((data.correct / data.total) * 100)
          const nextLevel = level === 'PRIMARY_CLASS_CD'
            ? 'SECONDARY_CLASS_CD'
            : level === 'SECONDARY_CLASS_CD'
            ? 'TERTIARY_CLASS_CD'
            : null

          // Get human-readable name from mappings
          const displayName = levelMappings[category] || category

          return (
            <div key={key} className="bg-base-100 rounded">
              <div
                className="p-3 flex items-center justify-between cursor-pointer hover:bg-base-200"
                onClick={() => toggleCategory(key)}
              >
                <div className="flex items-center gap-3">
                  {nextLevel && (
                    <svg
                      className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  <span className="font-medium">{displayName}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2 text-sm">
                    <span className="text-success">{data.correct} correct</span>
                    <span className="text-base-content/40">|</span>
                    <span className="text-error">{data.incorrect} wrong</span>
                  </div>
                  <div className={`font-bold ${getScoreColor(data.correct, data.total)}`}>
                    {pct}%
                  </div>
                  <div className="w-24 bg-base-300 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${pct >= 80 ? 'bg-success' : pct >= 60 ? 'bg-warning' : 'bg-error'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>

              {isExpanded && nextLevel && (
                <div className="pl-6 pr-3 pb-3">
                  {renderCategoryStats(
                    buildCategoryStats(data.questions, nextLevel),
                    nextLevel,
                    key,
                    sectionId
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  const totalQuestions = questionsBySection.reading.length + questionsBySection.math.length

  if (totalQuestions === 0) {
    return (
      <div className="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>No questions with category data available for analysis. Tests 6-9 have detailed category breakdowns.</span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {questionsWithoutMetadata > 0 && (
        <div className="alert alert-warning">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{questionsWithoutMetadata} questions without category data are excluded from this analysis.</span>
        </div>
      )}
      {Object.entries(questionsBySection).map(([sectionId, questions]) => {
        if (questions.length === 0) return null

        const totalCorrect = questions.filter(q => q.answer?.correct).length
        const totalQuestions = questions.length
        const pct = Math.round((totalCorrect / totalQuestions) * 100)

        return (
          <div key={sectionId} className="card bg-base-200 shadow-md">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title">{SECTION_NAMES[sectionId] || sectionId}</h2>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${getScoreColor(totalCorrect, totalQuestions)}`}>
                    {pct}%
                  </div>
                  <div className="text-sm text-base-content/60">
                    {totalCorrect} / {totalQuestions} correct
                  </div>
                </div>
              </div>

              <div className="text-sm text-base-content/60 mb-2">
                Sorted by accuracy (weakest areas first)
              </div>

              {renderCategoryStats(
                buildCategoryStats(questions, 'PRIMARY_CLASS_CD'),
                'PRIMARY_CLASS_CD',
                sectionId,
                sectionId
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
