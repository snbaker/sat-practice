import { useState, useEffect, useMemo } from 'react'

export default function TakeTest({ result, allResults = [], onComplete, onCancel }) {
  const [responses, setResponses] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [selectedSection, setSelectedSection] = useState(null) // null = choose, 'all' or section id

  const sections = result.data || []

  // Build a lookup map of all questions by ID for finding influencing questions
  const questionLookup = useMemo(() => {
    const lookup = {}
    allResults.forEach(r => {
      if (!Array.isArray(r.data)) return
      r.data.forEach(section => {
        section.items?.forEach(item => {
          if (item.questionId) {
            lookup[item.questionId] = {
              ...item,
              sectionId: section.id,
              testName: r.name
            }
          }
        })
      })
    })
    return lookup
  }, [allResults])

  // Filter sections based on selection
  const activeSections = selectedSection === 'all'
    ? sections
    : sections.filter(s => s.id === selectedSection)

  const allQuestions = activeSections.flatMap((s, sIdx) =>
    (s.items || []).map((item, qIdx) => ({
      ...item,
      sectionId: s.id,
      sectionIndex: sections.findIndex(sec => sec.id === s.id), // Use original index for saving
      questionIndex: qIdx,
      globalKey: `${sections.findIndex(sec => sec.id === s.id)}-${qIdx}`
    }))
  )

  const totalQuestions = allQuestions.length
  const answeredCount = Object.keys(responses).length
  const allAnswered = answeredCount === totalQuestions
  const currentQuestion = allQuestions[currentIndex]

  // Trigger MathJax rendering
  useEffect(() => {
    const renderMath = () => {
      if (window.MathJax?.typesetPromise) {
        window.MathJax.typesetPromise().catch(err => console.log('MathJax error:', err))
      } else if (window.MathJax?.typeset) {
        window.MathJax.typeset()
      }
    }
    const timer = setTimeout(renderMath, 50)
    return () => clearTimeout(timer)
  }, [currentIndex, showResults, expandedQuestion, responses])

  const handleSelectAnswer = (key, choice) => {
    setResponses(prev => ({
      ...prev,
      [key]: choice
    }))
  }

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleSubmit = () => {
    // Calculate results and update the test data
    const updatedData = sections.map((section, sIdx) => ({
      ...section,
      items: section.items.map((item, qIdx) => {
        const key = `${sIdx}-${qIdx}`
        const response = responses[key]
        const correct = response === item.answer?.correctChoice
        return {
          ...item,
          answer: {
            ...item.answer,
            response,
            correct
          }
        }
      })
    }))

    const updatedResult = {
      ...result,
      data: updatedData,
      taken: true,
      completedAt: new Date().toISOString()
    }

    setShowResults(true)
    setShowConfirm(false)
    onComplete(updatedResult)
  }

  const renderContent = (value) => {
    if (!value) return null
    if (typeof value === 'string') return value.trim() || null
    if (typeof value === 'number') return String(value)
    if (value.body) return renderContent(value.body)
    if (value.html) return renderContent(value.html)
    if (value.text) return renderContent(value.text)
    if (value.content) return renderContent(value.content)
    if (value.value) return renderContent(value.value)
    if (Array.isArray(value)) return value.map(v => renderContent(v)).filter(Boolean).join(' ')
    if (typeof value === 'object') {
      // Empty object
      if (Object.keys(value).length === 0) return null
      // Try to find any string property as fallback
      const firstStringValue = Object.values(value).find(v => typeof v === 'string')
      if (firstStringValue) return firstStringValue
      // Last resort: stringify but warn in console
      console.warn('Unknown content structure:', value)
      return null
    }
    return null
  }

  // Results view after submission
  if (showResults) {
    const correctCount = allQuestions.filter(q => {
      const response = responses[q.globalKey]
      return response === q.answer?.correctChoice
    }).length

    return (
      <div className="space-y-6">
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Test Complete!</h2>

            <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 my-4">
              <div className="stat">
                <div className="stat-title">Score</div>
                <div className="stat-value text-primary">
                  {Math.round((correctCount / totalQuestions) * 100)}%
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">Correct</div>
                <div className="stat-value text-success">{correctCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Incorrect</div>
                <div className="stat-value text-error">{totalQuestions - correctCount}</div>
              </div>
            </div>

            <button className="btn btn-primary" onClick={onCancel}>
              Back to Results
            </button>
          </div>
        </div>

        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h3 className="font-bold text-lg mb-4">Review Answers</h3>

            {activeSections.map((section) => {
              const originalSectionIndex = sections.findIndex(s => s.id === section.id)
              return (
              <div key={section.id} className="mb-6">
                <h4 className="font-medium text-base-content/80 mb-3">
                  {section.id === 'reading' ? 'Reading & Writing' : 'Math'}
                </h4>

                <div className="space-y-2">
                  {section.items.map((item, qIdx) => {
                    const key = `${originalSectionIndex}-${qIdx}`
                    const response = responses[key]
                    const isCorrect = response === item.answer?.correctChoice
                    const isExpanded = expandedQuestion === key

                    return (
                      <div
                        key={qIdx}
                        className={`rounded-lg overflow-hidden ${isCorrect ? 'bg-success/10' : 'bg-error/10'}`}
                      >
                        <div
                          className="p-3 flex items-start gap-3 cursor-pointer hover:bg-base-300/30"
                          onClick={() => setExpandedQuestion(isExpanded ? null : key)}
                        >
                          <div className={`badge ${isCorrect ? 'badge-success' : 'badge-error'} badge-sm mt-0.5`}>
                            {qIdx + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div
                              className={`text-sm [&_math]:inline ${!isExpanded ? 'line-clamp-2' : ''}`}
                              dangerouslySetInnerHTML={{ __html: item.prompt }}
                            />
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-base-content/60">
                              <span>Your answer: <span className={`font-medium ${isCorrect ? 'text-success' : 'text-error'}`}>{response || 'None'}</span></span>
                              <span>Correct: <span className="font-medium text-success">{item.answer?.correctChoice}</span></span>
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
                                  {Object.entries(item.answer.choices).map(([choiceKey, value]) => (
                                    <div
                                      key={choiceKey}
                                      className={`text-sm p-2 rounded flex gap-2 ${
                                        choiceKey === item.answer.correctChoice
                                          ? 'bg-success/20 text-success'
                                          : choiceKey === response && !isCorrect
                                          ? 'bg-error/20 text-error'
                                          : 'bg-base-200'
                                      }`}
                                    >
                                      <span className="font-medium">{choiceKey}.</span>
                                      <span dangerouslySetInnerHTML={{ __html: renderContent(value) }} />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {renderContent(item.answer?.rationale) && (
                              <div className="bg-base-200 p-3 rounded">
                                <div className="text-xs font-medium text-base-content/60 mb-1">Explanation</div>
                                <div
                                  className="text-sm [&_math]:inline [&_p]:inline"
                                  dangerouslySetInnerHTML={{ __html: renderContent(item.answer.rationale) }}
                                />
                              </div>
                            )}

                            {item.generationReason && (
                              <div className="bg-primary/10 p-3 rounded">
                                <div className="text-xs font-medium text-primary/70 mb-1">Why this question was generated</div>
                                <div className="text-sm text-primary/80">
                                  {item.generationReason}
                                </div>
                              </div>
                            )}

                            {item.influencedBy && item.influencedBy.length > 0 && (
                              <div className="bg-secondary/10 p-3 rounded">
                                <div className="text-xs font-medium text-secondary/70 mb-2">Based on these questions from your history</div>
                                <div className="space-y-2">
                                  {item.influencedBy.map(qId => {
                                    const origQuestion = questionLookup[qId]
                                    if (!origQuestion) return null
                                    return (
                                      <div key={qId} className="bg-base-100 p-2 rounded text-sm">
                                        <div className="flex items-start gap-2">
                                          <span className={`badge badge-xs ${origQuestion.answer?.correct ? 'badge-success' : 'badge-error'}`}>
                                            {origQuestion.answer?.correct ? 'Correct' : 'Incorrect'}
                                          </span>
                                          <div className="flex-1 min-w-0">
                                            <div className="text-xs text-base-content/60 mb-1">
                                              {origQuestion.testName} • {origQuestion.sectionId === 'reading' ? 'Reading & Writing' : 'Math'}
                                              {origQuestion.metadata?.PRIMARY_CLASS_CD && ` • ${origQuestion.metadata.PRIMARY_CLASS_CD}`}
                                            </div>
                                            <div
                                              className="line-clamp-2 text-sm"
                                              dangerouslySetInnerHTML={{ __html: origQuestion.prompt }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    )
  }

  // Section selection view
  if (selectedSection === null) {
    const hasReading = sections.some(s => s.id === 'reading')
    const hasMath = sections.some(s => s.id === 'math')
    const readingCount = sections.find(s => s.id === 'reading')?.items?.length || 0
    const mathCount = sections.find(s => s.id === 'math')?.items?.length || 0
    const totalCount = readingCount + mathCount

    return (
      <div className="space-y-6">
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title">{result.name}</h2>
            <p className="text-base-content/60">Choose which section to take:</p>

            <div className="grid gap-4 mt-4">
              {hasReading && hasMath && (
                <button
                  className="btn btn-outline btn-lg justify-between"
                  onClick={() => setSelectedSection('all')}
                >
                  <span>Full Test</span>
                  <span className="badge badge-neutral">{totalCount} questions</span>
                </button>
              )}

              {hasReading && (
                <button
                  className="btn btn-primary btn-lg justify-between"
                  onClick={() => setSelectedSection('reading')}
                >
                  <span>Reading & Writing</span>
                  <span className="badge badge-primary-content">{readingCount} questions</span>
                </button>
              )}

              {hasMath && (
                <button
                  className="btn btn-secondary btn-lg justify-between"
                  onClick={() => setSelectedSection('math')}
                >
                  <span>Math</span>
                  <span className="badge badge-secondary-content">{mathCount} questions</span>
                </button>
              )}
            </div>

            <div className="card-actions justify-end mt-4">
              <button className="btn btn-ghost" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Section selection view
  if (selectedSection === null) {
    const hasReading = sections.some(s => s.id === 'reading')
    const hasMath = sections.some(s => s.id === 'math')
    const readingCount = sections.find(s => s.id === 'reading')?.items?.length || 0
    const mathCount = sections.find(s => s.id === 'math')?.items?.length || 0
    const totalCount = readingCount + mathCount

    return (
      <div className="space-y-6">
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title">{result.name}</h2>
            <p className="text-base-content/60">Choose which section to take:</p>

            <div className="grid gap-4 mt-4">
              {hasReading && hasMath && (
                <button
                  className="btn btn-outline btn-lg justify-between"
                  onClick={() => setSelectedSection('all')}
                >
                  <span>Full Test</span>
                  <span className="badge badge-neutral">{totalCount} questions</span>
                </button>
              )}

              {hasReading && (
                <button
                  className="btn btn-primary btn-lg justify-between"
                  onClick={() => setSelectedSection('reading')}
                >
                  <span>Reading & Writing</span>
                  <span className="badge badge-primary-content">{readingCount} questions</span>
                </button>
              )}

              {hasMath && (
                <button
                  className="btn btn-secondary btn-lg justify-between"
                  onClick={() => setSelectedSection('math')}
                >
                  <span>Math</span>
                  <span className="badge badge-secondary-content">{mathCount} questions</span>
                </button>
              )}
            </div>

            <div className="card-actions justify-end mt-4">
              <button className="btn btn-ghost" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Single question view
  const selectedAnswer = responses[currentQuestion?.globalKey]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card bg-base-200 shadow-md">
        <div className="card-body py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-bold text-lg">
                {result.name}
                {selectedSection !== 'all' && (
                  <span className="ml-2 text-sm font-normal text-base-content/60">
                    ({selectedSection === 'reading' ? 'Reading & Writing' : 'Math'})
                  </span>
                )}
              </h2>
              <p className="text-sm text-base-content/60">
                Question {currentIndex + 1} of {totalQuestions}
                {selectedSection === 'all' && currentQuestion && (
                  <span className="ml-2">
                    ({currentQuestion.sectionId === 'reading' ? 'Reading & Writing' : 'Math'})
                  </span>
                )}
              </p>
            </div>
            <button className="btn btn-ghost btn-sm" onClick={onCancel}>
              Exit
            </button>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-2 mt-2">
            <progress
              className="progress progress-primary flex-1"
              value={answeredCount}
              max={totalQuestions}
            />
            <span className="text-xs text-base-content/60 whitespace-nowrap">
              {answeredCount}/{totalQuestions} answered
            </span>
          </div>

          {/* Question dots */}
          <div className="flex flex-wrap gap-1 mt-3">
            {allQuestions.map((q, idx) => {
              const isAnswered = responses[q.globalKey]
              const isCurrent = idx === currentIndex
              return (
                <button
                  key={idx}
                  className={`w-8 h-8 rounded text-xs font-medium transition-colors ${
                    isCurrent
                      ? 'bg-primary text-primary-content'
                      : isAnswered
                      ? 'bg-success/30 text-success hover:bg-success/40'
                      : 'bg-base-300 hover:bg-base-100'
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  {idx + 1}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Question */}
      {currentQuestion && (
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            {renderContent(currentQuestion.passage) && (
              <div className="bg-base-100 p-4 rounded-lg mb-4 text-sm">
                <div
                  className="[&_math]:inline prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderContent(currentQuestion.passage) }}
                />
              </div>
            )}

            <div
              className="text-base mb-6 [&_math]:inline"
              dangerouslySetInnerHTML={{ __html: currentQuestion.prompt }}
            />

            {currentQuestion.answer?.choices && (
              <div className="space-y-3">
                {Object.entries(currentQuestion.answer.choices).map(([choiceKey, value]) => (
                  <button
                    key={choiceKey}
                    className={`w-full text-left p-4 rounded-lg flex gap-3 transition-colors ${
                      selectedAnswer === choiceKey
                        ? 'bg-primary text-primary-content'
                        : 'bg-base-100 hover:bg-base-300'
                    }`}
                    onClick={() => handleSelectAnswer(currentQuestion.globalKey, choiceKey)}
                  >
                    <span className="font-bold text-lg">{choiceKey}.</span>
                    <span className="flex-1" dangerouslySetInnerHTML={{ __html: renderContent(value) }} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="card bg-base-200 shadow-md">
        <div className="card-body py-4">
          <div className="flex justify-between items-center">
            <button
              className="btn btn-ghost"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Previous
            </button>

            <button
              className="btn btn-success"
              onClick={() => setShowConfirm(true)}
            >
              Submit Test
            </button>

            <button
              className="btn btn-ghost"
              onClick={handleNext}
              disabled={currentIndex === totalQuestions - 1}
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Confirm Modal */}
      {showConfirm && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-xl mb-4">Submit Test?</h3>

            <div className="space-y-4">
              <div className="stats stats-vertical w-full bg-base-200">
                <div className="stat">
                  <div className="stat-title">Questions Answered</div>
                  <div className="stat-value">{answeredCount} / {totalQuestions}</div>
                </div>
              </div>

              {!allAnswered && (
                <div className="alert alert-warning">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>You have {totalQuestions - answeredCount} unanswered questions!</span>
                </div>
              )}

              <p className="text-base-content/70">
                Are you sure you want to submit? You cannot change your answers after submitting.
              </p>
            </div>

            <div className="modal-action">
              <button className="btn btn-ghost" onClick={() => setShowConfirm(false)}>
                Keep Working
              </button>
              <button className="btn btn-success btn-lg" onClick={handleSubmit}>
                Yes, Submit Test
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setShowConfirm(false)}>close</button>
          </form>
        </dialog>
      )}
    </div>
  )
}
