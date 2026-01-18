import { useState, useEffect, useRef } from 'react'
import { isRichFormat, getSectionStats, getTotalScore } from '../utils/dataTransform'

export default function TestResults({ result, onDelete }) {
  const { data, id, uploadedAt } = result
  const [expandedSection, setExpandedSection] = useState(null)
  const [expandedQuestion, setExpandedQuestion] = useState(null)

  // Trigger MathJax to render math content when section/question expands
  useEffect(() => {
    if ((expandedSection !== null || expandedQuestion !== null) && window.MathJax?.typeset) {
      setTimeout(() => window.MathJax.typeset(), 10)
    }
  }, [expandedSection, expandedQuestion])

  // Render a value that might be a string, object with html/text property, or other
  const renderContent = (value) => {
    if (!value) return null
    if (typeof value === 'string') return value.trim() || null
    if (value.body) return value.body
    if (value.html) return value.html
    if (value.text) return value.text
    if (value.content) return value.content
    if (value.value) return value.value
    // Empty object check
    if (typeof value === 'object' && Object.keys(value).length === 0) return null
    return null
  }

  const isRich = isRichFormat(data)

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Unknown date'
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getScoreColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100
    if (percentage >= 80) return 'text-success'
    if (percentage >= 60) return 'text-warning'
    return 'text-error'
  }

  // Derive data based on format
  const totalScore = isRich ? getTotalScore(data) : data.totalScore
  const sections = isRich
    ? data.map(section => ({ ...getSectionStats(section), items: section.items }))
    : data.sections || []
  const displayName = data.name || 'Practice Test'
  const displayDate = data.date || uploadedAt

  return (
    <div className="card bg-base-200 shadow-md">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="card-title">{displayName}</h3>
            <p className="text-sm text-base-content/60">{formatDate(displayDate)}</p>
          </div>
          {totalScore !== undefined && totalScore !== null && (
            <div className="text-right">
              <div className={`text-3xl font-bold ${getScoreColor(totalScore, 1600)}`}>
                {totalScore}
              </div>
              <div className="text-xs text-base-content/60">/ 1600</div>
            </div>
          )}
        </div>

        {sections.length > 0 && (
          <div className="divider my-2"></div>
        )}

        {sections.length > 0 && (
          <div className="space-y-4">
            {sections.map((section, idx) => (
              <div key={section.id || idx} className="bg-base-100 rounded-lg overflow-hidden">
                <div
                  className={`p-4 ${section.items ? 'cursor-pointer hover:bg-base-200' : ''}`}
                  onClick={() => section.items && setExpandedSection(
                    expandedSection === (section.id || idx) ? null : (section.id || idx)
                  )}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{section.name}</div>
                      {section.correct !== undefined && section.total !== undefined && (
                        <div className="text-sm text-base-content/60">
                          {section.correct} / {section.total} correct ({Math.round((section.correct / section.total) * 100)}%)
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`text-2xl font-bold ${getScoreColor(section.score, section.maxScore || 800)}`}>
                        {section.score}
                        <span className="text-sm text-base-content/60 font-normal">
                          {' '}/ {section.maxScore || 800}
                        </span>
                      </div>
                      {section.items && (
                        <svg
                          className={`w-5 h-5 transition-transform ${expandedSection === (section.id || idx) ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {section.items && expandedSection === (section.id || idx) && (
                  <div className="border-t border-base-300 max-h-[600px] overflow-y-auto">
                    {section.items.map((item, itemIdx) => {
                      const questionKey = `${section.id}-${item.questionId || itemIdx}`
                      const isExpanded = expandedQuestion === questionKey
                      return (
                        <div
                          key={item.questionId || itemIdx}
                          className={`border-b border-base-300 last:border-b-0 ${
                            item.answer?.correct ? 'bg-success/5' : 'bg-error/5'
                          }`}
                        >
                          <div
                            className="p-3 flex items-start gap-3 cursor-pointer hover:bg-base-300/30"
                            onClick={(e) => {
                              e.stopPropagation()
                              const newExpanded = isExpanded ? null : questionKey
                              setExpandedQuestion(newExpanded)
                              if (newExpanded) {
                                setTimeout(() => {
                                  e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
                                }, 50)
                              }
                            }}
                          >
                            <div className={`badge ${item.answer?.correct ? 'badge-success' : 'badge-error'} badge-sm mt-0.5`}>
                              {item.displayNumber || itemIdx + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              {item.prompt && (
                                <div
                                  className={`text-sm [&_math]:inline [&_figure]:inline [&_table]:text-xs [&_img]:bg-white [&_img]:p-2 [&_img]:rounded [&_figure]:bg-white [&_figure]:p-2 [&_figure]:rounded ${!isExpanded ? 'line-clamp-2' : ''}`}
                                  dangerouslySetInnerHTML={{ __html: item.prompt }}
                                />
                              )}
                              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-base-content/60">
                                {item.answer?.response && (
                                  <span>Your answer: <span className={`font-medium ${item.answer?.correct ? 'text-success' : 'text-error'}`}>{item.answer.response}</span></span>
                                )}
                                {item.answer?.correctChoice && (
                                  <span>Correct: <span className="font-medium text-success">{item.answer.correctChoice}</span></span>
                                )}
                              </div>
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
                              {renderContent(item.passage) && (
                                <div className="bg-base-200 p-3 rounded text-sm">
                                  <div className="text-xs font-medium text-base-content/60 mb-1">Passage</div>
                                  <div
                                    className="[&_math]:inline prose prose-sm max-w-none"
                                    dangerouslySetInnerHTML={{ __html: renderContent(item.passage) }}
                                  />
                                </div>
                              )}

                              {item.answer?.choices && (
                                <div>
                                  <div className="text-xs font-medium text-base-content/60 mb-1">Answer Choices</div>
                                  <div className="space-y-1">
                                    {Object.entries(item.answer.choices).map(([key, value]) => (
                                      <div
                                        key={key}
                                        className={`text-sm p-2 rounded flex gap-2 ${
                                          key === item.answer.correctChoice
                                            ? 'bg-success/20 text-success'
                                            : key === item.answer.response && !item.answer.correct
                                            ? 'bg-error/20 text-error'
                                            : 'bg-base-200'
                                        }`}
                                      >
                                        <span className="font-medium">{key}.</span>
                                        <span
                                          className="[&_mjx-container]:!inline-block [&_mjx-container]:align-middle"
                                          dangerouslySetInnerHTML={{ __html: renderContent(value) }}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {renderContent(item.answer?.rationale) && (
                                <div className="bg-base-200 p-3 rounded">
                                  <div className="text-xs font-medium text-base-content/60 mb-1">Explanation</div>
                                  <div
                                    className="text-sm [&_math]:inline [&_mjx-container]:!inline-block [&_mjx-container]:align-middle [&_p]:inline"
                                    dangerouslySetInnerHTML={{ __html: renderContent(item.answer.rationale) }}
                                  />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {onDelete && (
          <div className="card-actions justify-end mt-4">
            <button
              className="btn btn-ghost btn-sm text-error"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
