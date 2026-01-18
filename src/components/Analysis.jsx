import { useState } from 'react'
import { isRichFormat } from '../utils/dataTransform'
import { getTopicMappings } from '../utils/topicMappings'

const SECTION_NAMES = {
  reading: 'Reading & Writing',
  math: 'Math'
}

export default function Analysis({ results, onPracticeCategory }) {
  const [expandedCategories, setExpandedCategories] = useState({})
  const [source, setSource] = useState('uploaded') // 'uploaded' or 'generated' or 'all'
  const [viewingQuestions, setViewingQuestions] = useState(null) // { key, filter: 'all' | 'correct' | 'incorrect', questions }
  const [expandedQuestion, setExpandedQuestion] = useState(null)

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

  // Filter results based on source selection
  const filteredResults = results.filter(result => {
    if (source === 'uploaded') return !result.generated
    if (source === 'generated') return result.generated && result.taken
    return true // 'all'
  })

  // Collect all questions from filtered results
  const questionsBySection = { reading: [], math: [] }
  const uncategorizedBySection = { reading: [], math: [] }

  filteredResults.forEach(result => {
    const { data } = result
    if (!isRichFormat(data)) return

    data.forEach(section => {
      const sectionId = section.id
      if (questionsBySection[sectionId]) {
        section.items?.forEach(item => {
          if (item.metadata?.PRIMARY_CLASS_CD) {
            questionsBySection[sectionId].push(item)
          } else {
            uncategorizedBySection[sectionId].push(item)
          }
        })
      }
    })
  })

  const totalUncategorized = uncategorizedBySection.reading.length + uncategorizedBySection.math.length

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
                  {level === 'PRIMARY_CLASS_CD' && (
                    <div className="flex gap-1">
                      <button
                        className="btn btn-xs btn-ghost"
                        onClick={(e) => {
                          e.stopPropagation()
                          setViewingQuestions({
                            key,
                            title: displayName,
                            filter: 'all',
                            questions: data.questions
                          })
                        }}
                      >
                        Review
                      </button>
                      {onPracticeCategory && (
                        <button
                          className="btn btn-xs btn-primary"
                          onClick={(e) => {
                            e.stopPropagation()
                            onPracticeCategory(sectionId, category)
                          }}
                        >
                          Practice
                        </button>
                      )}
                    </div>
                  )}
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

  const uploadedCount = results.filter(r => !r.generated).length
  const generatedCount = results.filter(r => r.generated && r.taken).length

  return (
    <div className="space-y-6">
      {/* Source Toggle */}
      <div className="flex justify-between items-center">
        <div className="join">
          <button
            className={`btn btn-sm join-item ${source === 'uploaded' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setSource('uploaded')}
          >
            Uploaded Tests ({uploadedCount})
          </button>
          <button
            className={`btn btn-sm join-item ${source === 'generated' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setSource('generated')}
            disabled={generatedCount === 0}
          >
            Practice Tests ({generatedCount})
          </button>
          <button
            className={`btn btn-sm join-item ${source === 'all' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setSource('all')}
          >
            All
          </button>
        </div>
      </div>

      {Object.entries(questionsBySection).map(([sectionId, questions]) => {
        const uncategorized = uncategorizedBySection[sectionId] || []
        const allQuestions = [...questions, ...uncategorized]

        if (allQuestions.length === 0) return null

        const totalCorrect = allQuestions.filter(q => q.answer?.correct).length
        const totalQuestions = allQuestions.length
        const pct = Math.round((totalCorrect / totalQuestions) * 100)

        const uncatCorrect = uncategorized.filter(q => q.answer?.correct).length
        const uncatTotal = uncategorized.length
        const uncatPct = uncatTotal > 0 ? Math.round((uncatCorrect / uncatTotal) * 100) : 0

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

              {questions.length > 0 && (
                <>
                  <div className="text-sm text-base-content/60 mb-2">
                    Sorted by accuracy (weakest areas first)
                  </div>

                  {renderCategoryStats(
                    buildCategoryStats(questions, 'PRIMARY_CLASS_CD'),
                    'PRIMARY_CLASS_CD',
                    sectionId,
                    sectionId
                  )}
                </>
              )}

              {uncatTotal > 0 && (
                <div className="mt-4 pt-4 border-t border-base-300">
                  <div className="bg-base-100 rounded p-3 flex justify-between items-center">
                    <div>
                      <span className="font-medium text-base-content/70">Without Category Data</span>
                      <span className="text-xs text-base-content/50 ml-2">({uncatTotal} questions)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2 text-sm">
                        <span className="text-success">{uncatCorrect} correct</span>
                        <span className="text-base-content/40">|</span>
                        <span className="text-error">{uncatTotal - uncatCorrect} wrong</span>
                      </div>
                      <div className={`font-bold ${getScoreColor(uncatCorrect, uncatTotal)}`}>
                        {uncatPct}%
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      })}

      {/* Question Review Modal */}
      {viewingQuestions && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-4xl max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">{viewingQuestions.title}</h3>
              <button
                className="btn btn-sm btn-ghost"
                onClick={() => {
                  setViewingQuestions(null)
                  setExpandedQuestion(null)
                }}
              >
                ✕
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="join mb-4">
              <button
                className={`btn btn-sm join-item ${viewingQuestions.filter === 'all' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setViewingQuestions({ ...viewingQuestions, filter: 'all' })}
              >
                All ({viewingQuestions.questions.length})
              </button>
              <button
                className={`btn btn-sm join-item ${viewingQuestions.filter === 'correct' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setViewingQuestions({ ...viewingQuestions, filter: 'correct' })}
              >
                Correct ({viewingQuestions.questions.filter(q => q.answer?.correct).length})
              </button>
              <button
                className={`btn btn-sm join-item ${viewingQuestions.filter === 'incorrect' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setViewingQuestions({ ...viewingQuestions, filter: 'incorrect' })}
              >
                Incorrect ({viewingQuestions.questions.filter(q => !q.answer?.correct).length})
              </button>
            </div>

            {/* Questions List */}
            <div className="overflow-y-auto max-h-[60vh] space-y-2">
              {viewingQuestions.questions
                .filter(q => {
                  if (viewingQuestions.filter === 'correct') return q.answer?.correct
                  if (viewingQuestions.filter === 'incorrect') return !q.answer?.correct
                  return true
                })
                .map((item, idx) => {
                  const qKey = `${viewingQuestions.key}-${idx}`
                  const isExpanded = expandedQuestion === qKey
                  const isCorrect = item.answer?.correct

                  return (
                    <div
                      key={idx}
                      className={`rounded-lg overflow-hidden ${isCorrect ? 'bg-success/10' : 'bg-error/10'}`}
                    >
                      <div
                        className="p-3 flex items-start gap-3 cursor-pointer hover:bg-base-300/30"
                        onClick={() => setExpandedQuestion(isExpanded ? null : qKey)}
                      >
                        <div className={`badge ${isCorrect ? 'badge-success' : 'badge-error'} badge-sm mt-0.5`}>
                          {isCorrect ? '✓' : '✗'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm [&_math]:inline ${!isExpanded ? 'line-clamp-2' : ''}`}
                            dangerouslySetInnerHTML={{ __html: item.prompt }}
                          />
                          {!isExpanded && (
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-base-content/60">
                              {item.answer?.response && (
                                <span>Your answer: <span className={`font-medium ${isCorrect ? 'text-success' : 'text-error'}`}>{item.answer.response}</span></span>
                              )}
                              {item.answer?.correctChoice && (
                                <span>Correct: <span className="font-medium text-success">{item.answer.correctChoice}</span></span>
                              )}
                            </div>
                          )}
                        </div>
                        <svg
                          className={`w-4 h-4 shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      {isExpanded && (
                        <div className="px-3 pb-3 space-y-3 ml-8">
                          {item.passage?.body && (
                            <div className="bg-base-200 p-3 rounded text-sm">
                              <div className="text-xs font-medium text-base-content/60 mb-1">Passage</div>
                              <div
                                className="[&_math]:inline prose prose-sm max-w-none"
                                dangerouslySetInnerHTML={{ __html: item.passage.body }}
                              />
                            </div>
                          )}

                          {item.answer?.choices && (
                            <div>
                              <div className="text-xs font-medium text-base-content/60 mb-1">Answer Choices</div>
                              <div className="space-y-1">
                                {Object.entries(item.answer.choices).map(([choiceKey, value]) => (
                                  <div
                                    key={choiceKey}
                                    className={`text-sm p-2 rounded flex gap-2 ${
                                      choiceKey === item.answer.correctChoice
                                        ? 'bg-success/20 text-success'
                                        : choiceKey === item.answer.response && !isCorrect
                                        ? 'bg-error/20 text-error'
                                        : 'bg-base-200'
                                    }`}
                                  >
                                    <span className="font-medium">{choiceKey}.</span>
                                    <span dangerouslySetInnerHTML={{ __html: value?.body || value }} />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.answer?.rationale && (
                            <div className="bg-base-200 p-3 rounded">
                              <div className="text-xs font-medium text-base-content/60 mb-1">Explanation</div>
                              <div
                                className="text-sm [&_math]:inline [&_p]:inline"
                                dangerouslySetInnerHTML={{ __html: item.answer.rationale }}
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>

            <div className="modal-action">
              <button
                className="btn"
                onClick={() => {
                  setViewingQuestions(null)
                  setExpandedQuestion(null)
                }}
              >
                Close
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => {
              setViewingQuestions(null)
              setExpandedQuestion(null)
            }}>close</button>
          </form>
        </dialog>
      )}
    </div>
  )
}
