import { useState, useMemo, useEffect } from 'react'
import { hasApiKey, generateTest } from '../services/openai'
import { getTopicName } from '../utils/topicMappings'
import { getQuestions, getCurrentUser } from '../services/supabase'

export default function Generate({ results, onTestGenerated, onOpenSettings, categoryFilter, onClearCategoryFilter }) {
  const [mode, setMode] = useState('review') // 'ai', 'review', or 'bank'
  const [section, setSection] = useState('both')
  const [questionCount, setQuestionCount] = useState(5)

  // When category filter is set, update section to match
  useEffect(() => {
    if (categoryFilter) {
      setSection(categoryFilter.sectionId)
    }
  }, [categoryFilter])
  const [wrongRatio, setWrongRatio] = useState(70) // percentage of wrong questions
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState({ current: 0, total: 0 })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  // Question bank state
  const [bankQuestions, setBankQuestions] = useState([])
  const [bankLoading, setBankLoading] = useState(true)
  const [useSupabase, setUseSupabase] = useState(false)

  // Check if Supabase is available
  useEffect(() => {
    const checkSupabase = async () => {
      try {
        const user = await getCurrentUser()
        const hasSupabaseUrl = import.meta.env.VITE_SUPABASE_URL
        setUseSupabase(!!(user && hasSupabaseUrl))
      } catch (e) {
        setUseSupabase(false)
      }
    }
    checkSupabase()
  }, [])

  // Load question bank
  useEffect(() => {
    const loadBank = async () => {
      try {
        if (useSupabase) {
          // Load from Supabase
          const data = await getQuestions()
          setBankQuestions(data)
        } else {
          // Fallback to local file
          const response = await fetch('/bank/question-bank.json')
          if (!response.ok) {
            setBankQuestions([])
            return
          }
          const data = await response.json()
          const allQuestions = data.flatMap(section =>
            (section.items || []).map(item => ({
              ...item,
              sectionId: section.id
            }))
          )
          setBankQuestions(allQuestions)
        }
      } catch (e) {
        console.log('No question bank found:', e)
        setBankQuestions([])
      } finally {
        setBankLoading(false)
      }
    }
    if (useSupabase !== null) {
      loadBank()
    }
  }, [useSupabase])

  // Question counts: include 30 and 40 when AI is not selected
  const questionCounts = mode === 'ai' ? [1, 5, 10, 20] : [1, 5, 10, 20, 30, 40]

  // Get available questions from uploaded (non-generated) tests
  const availableQuestions = useMemo(() => {
    const questions = { reading: [], math: [], wrong: [], correct: [] }

    results
      .filter(r => !r.generated) // Only uploaded tests
      .forEach(result => {
        if (!Array.isArray(result.data)) return
        result.data.forEach(s => {
          const sectionId = s.id
          s.items?.forEach(item => {
            const q = { ...item, sectionId, sourceTest: result.name }
            if (sectionId === 'reading' || sectionId === 'math') {
              questions[sectionId].push(q)
            }
            if (item.answer?.correct) {
              questions.correct.push(q)
            } else {
              questions.wrong.push(q)
            }
          })
        })
      })

    return questions
  }, [results])

  const totalAvailable = availableQuestions.reading.length + availableQuestions.math.length

  const handleGenerateAI = async () => {
    if (!hasApiKey()) {
      setError('Please configure your OpenAI API key in Settings first.')
      return
    }

    setLoading(true)
    setProgress({ current: 0, total: questionCount })
    setError(null)
    setSuccess(false)

    try {
      const testData = await generateTest({
        section,
        questionCount,
        focusOnWeakAreas: true,
        wrongRatio,
        results
      }, (current, total) => {
        setProgress({ current, total })
      })

      const categoryName = categoryFilter ? getTopicName(categoryFilter.categoryCode, categoryFilter.sectionId) : null
      const newResult = {
        data: testData,
        id: Date.now(),
        uploadedAt: new Date().toISOString(),
        name: categoryName
          ? `${categoryName} (AI) - ${new Date().toLocaleDateString()}`
          : `AI Practice - ${new Date().toLocaleDateString()}`,
        generated: true,
        generationType: categoryFilter ? 'category' : 'ai',
        categoryCode: categoryFilter?.categoryCode,
        taken: false
      }

      onTestGenerated(newResult)
      setSuccess(true)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGenerateReview = () => {
    setError(null)
    setSuccess(false)

    // Collect questions based on section filter
    let pool = []
    if (section === 'both' || section === 'reading') {
      pool.push(...availableQuestions.reading)
    }
    if (section === 'both' || section === 'math') {
      pool.push(...availableQuestions.math)
    }

    // Filter by category if set
    if (categoryFilter) {
      pool = pool.filter(q => q.metadata?.PRIMARY_CLASS_CD === categoryFilter.categoryCode)
    }

    if (pool.length === 0) {
      setError(categoryFilter
        ? `No questions available for this category. Try clearing the category filter.`
        : 'No questions available from uploaded tests. Upload some tests first!')
      return
    }

    // Separate into wrong and correct
    const wrongPool = pool.filter(q => !q.answer?.correct)
    const correctPool = pool.filter(q => q.answer?.correct)

    // Calculate how many of each to pick
    const wrongCount = Math.round(questionCount * (wrongRatio / 100))
    const correctCount = questionCount - wrongCount

    // Shuffle function
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5)

    // Prioritize weak areas: separate wrong/correct pools by weak categories
    const weakCategoryCodes = new Set(
      relevantWeakAreas.slice(0, 5).map(w => w.code)
    )
    
    const wrongFromWeak = wrongPool.filter(q => weakCategoryCodes.has(q.metadata?.PRIMARY_CLASS_CD))
    const wrongFromOther = wrongPool.filter(q => !weakCategoryCodes.has(q.metadata?.PRIMARY_CLASS_CD))
    const correctFromWeak = correctPool.filter(q => weakCategoryCodes.has(q.metadata?.PRIMARY_CLASS_CD))
    const correctFromOther = correctPool.filter(q => !weakCategoryCodes.has(q.metadata?.PRIMARY_CLASS_CD))

    // Prioritize wrong questions from weak areas, then others
    // Prioritize correct questions from weak areas, then others
    const selectedWrong = [
      ...shuffle(wrongFromWeak).slice(0, wrongCount),
      ...shuffle(wrongFromOther).slice(0, Math.max(0, wrongCount - wrongFromWeak.length))
    ].slice(0, wrongCount)
    
    const selectedCorrect = [
      ...shuffle(correctFromWeak).slice(0, correctCount),
      ...shuffle(correctFromOther).slice(0, Math.max(0, correctCount - correctFromWeak.length))
    ].slice(0, correctCount)
    
    let selected = shuffle([...selectedWrong, ...selectedCorrect])

    // If we don't have enough, fill from whatever is available
    if (selected.length < questionCount) {
      const remaining = questionCount - selected.length
      const usedIds = new Set(selected.map(q => q.questionId))
      const extra = shuffle(pool.filter(q => !usedIds.has(q.questionId))).slice(0, remaining)
      selected = shuffle([...selected, ...extra])
    }

    if (selected.length === 0) {
      setError('Not enough questions available.')
      return
    }

    // Build test structure
    const readingItems = selected
      .filter(q => q.sectionId === 'reading')
      .map((q, i) => ({
        ...q,
        displayNumber: String(i + 1),
        answer: { ...q.answer, correct: false, response: undefined }
      }))

    const mathItems = selected
      .filter(q => q.sectionId === 'math')
      .map((q, i) => ({
        ...q,
        displayNumber: String(i + 1),
        answer: { ...q.answer, correct: false, response: undefined }
      }))

    const testData = []
    if (readingItems.length > 0) {
      testData.push({ id: 'reading', items: readingItems })
    }
    if (mathItems.length > 0) {
      testData.push({ id: 'math', items: mathItems })
    }

    const categoryName = categoryFilter ? getTopicName(categoryFilter.categoryCode, categoryFilter.sectionId) : null
    const newResult = {
      data: testData,
      id: Date.now(),
      uploadedAt: new Date().toISOString(),
      name: categoryName
        ? `${categoryName} Review - ${new Date().toLocaleDateString()}`
        : `Review Practice - ${new Date().toLocaleDateString()}`,
      generated: true,
      generationType: categoryFilter ? 'category' : 'review',
      categoryCode: categoryFilter?.categoryCode,
      taken: false
    }

    onTestGenerated(newResult)
    setSuccess(true)
  }

  // Analyze weak areas from user's test history
  const weakAreas = useMemo(() => {
    const categoryStats = {}

    results
      .filter(r => !r.generated)
      .forEach(result => {
        if (!Array.isArray(result.data)) return
        result.data.forEach(s => {
          s.items?.forEach(item => {
            const category = item.metadata?.PRIMARY_CLASS_CD
            if (!category) return

            if (!categoryStats[category]) {
              categoryStats[category] = { wrong: 0, total: 0, sectionId: s.id }
            }
            categoryStats[category].total++
            if (!item.answer?.correct) {
              categoryStats[category].wrong++
            }
          })
        })
      })

    // Calculate error rate and sort by weakness
    return Object.entries(categoryStats)
      .map(([code, stats]) => ({
        code,
        sectionId: stats.sectionId,
        errorRate: stats.wrong / stats.total,
        wrong: stats.wrong,
        total: stats.total
      }))
      .sort((a, b) => b.errorRate - a.errorRate)
  }, [results])

  // Calculate strength areas (best performance)
  const strengthAreas = useMemo(() => {
    return [...weakAreas]
      .sort((a, b) => a.errorRate - b.errorRate)
      .filter(area => area.total >= 3) // Only show if at least 3 questions
  }, [weakAreas])

  // Get weak areas that will be used for current section
  const relevantWeakAreas = useMemo(() => {
    return weakAreas.filter(area => {
      if (section === 'both') return true
      return area.sectionId === section
    })
  }, [weakAreas, section])

  // Get top weak areas for bank mode (top 5)
  const topWeakAreasForBank = useMemo(() => {
    return relevantWeakAreas.slice(0, 5)
  }, [relevantWeakAreas])

  // Calculate available questions breakdown by category for review mode
  const reviewModeBreakdown = useMemo(() => {
    const breakdown = {}
    
    let pool = []
    if (section === 'both' || section === 'reading') {
      pool.push(...availableQuestions.reading)
    }
    if (section === 'both' || section === 'math') {
      pool.push(...availableQuestions.math)
    }

    if (categoryFilter) {
      pool = pool.filter(q => q.metadata?.PRIMARY_CLASS_CD === categoryFilter.categoryCode)
    }

    pool.forEach(q => {
      const category = q.metadata?.PRIMARY_CLASS_CD || 'Uncategorized'
      if (!breakdown[category]) {
        breakdown[category] = { wrong: 0, correct: 0, sectionId: q.sectionId }
      }
      if (q.answer?.correct) {
        breakdown[category].correct++
      } else {
        breakdown[category].wrong++
      }
    })

    return Object.entries(breakdown)
      .map(([code, stats]) => ({
        code,
        sectionId: stats.sectionId,
        wrong: stats.wrong,
        correct: stats.correct,
        total: stats.wrong + stats.correct
      }))
      .sort((a, b) => {
        // Sort by error rate (weakest first)
        const errorRateA = a.wrong / a.total
        const errorRateB = b.wrong / b.total
        return errorRateB - errorRateA
      })
  }, [availableQuestions, section, categoryFilter])

  const handleGenerateBank = () => {
    setError(null)
    setSuccess(false)

    // Filter bank questions by section
    let pool = bankQuestions.filter(q => {
      if (section === 'both') return true
      return q.sectionId === section
    })

    // Filter by category if set
    if (categoryFilter) {
      pool = pool.filter(q => q.metadata?.PRIMARY_CLASS_CD === categoryFilter.categoryCode)
    }

    if (pool.length === 0) {
      setError(categoryFilter
        ? `No bank questions available for this category.`
        : 'No questions available in the bank for this section.')
      return
    }

    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5)

    // Weight selection based on weak areas
    // Questions matching weak categories get higher priority
    const weakCategoryCodes = new Set(
      topWeakAreasForBank.map(w => w.code)
    )

    const weakPool = pool.filter(q => weakCategoryCodes.has(q.metadata?.PRIMARY_CLASS_CD))
    const otherPool = pool.filter(q => !weakCategoryCodes.has(q.metadata?.PRIMARY_CLASS_CD))

    // Use wrongRatio to determine how many from weak areas vs random
    const weakCount = Math.round(questionCount * (wrongRatio / 100))
    const otherCount = questionCount - weakCount

    let selected = [
      ...shuffle(weakPool).slice(0, weakCount),
      ...shuffle(otherPool).slice(0, otherCount)
    ]

    // Fill remaining from whatever is available
    if (selected.length < questionCount) {
      const usedIds = new Set(selected.map(q => q.questionId))
      const remaining = shuffle(pool.filter(q => !usedIds.has(q.questionId)))
        .slice(0, questionCount - selected.length)
      selected = [...selected, ...remaining]
    }

    selected = shuffle(selected)

    if (selected.length === 0) {
      setError('Not enough questions available in the bank.')
      return
    }

    // Build test structure
    const readingItems = selected
      .filter(q => q.sectionId === 'reading')
      .map((q, i) => ({
        ...q,
        displayNumber: String(i + 1),
        answer: { ...q.answer, correct: false, response: undefined }
      }))

    const mathItems = selected
      .filter(q => q.sectionId === 'math')
      .map((q, i) => ({
        ...q,
        displayNumber: String(i + 1),
        answer: { ...q.answer, correct: false, response: undefined }
      }))

    const testData = []
    if (readingItems.length > 0) {
      testData.push({ id: 'reading', items: readingItems })
    }
    if (mathItems.length > 0) {
      testData.push({ id: 'math', items: mathItems })
    }

    const categoryName = categoryFilter ? getTopicName(categoryFilter.categoryCode, categoryFilter.sectionId) : null
    const newResult = {
      data: testData,
      id: Date.now(),
      uploadedAt: new Date().toISOString(),
      name: categoryName
        ? `${categoryName} Bank - ${new Date().toLocaleDateString()}`
        : `Bank Practice - ${new Date().toLocaleDateString()}`,
      generated: true,
      generationType: 'bank',
      categoryCode: categoryFilter?.categoryCode,
      taken: false
    }

    onTestGenerated(newResult)
    setSuccess(true)
  }

  const handleGenerate = () => {
    if (mode === 'ai') {
      handleGenerateAI()
    } else if (mode === 'bank') {
      handleGenerateBank()
    } else {
      handleGenerateReview()
    }
  }

  const apiKeyConfigured = hasApiKey()
  const canGenerate =
    mode === 'review' ? totalAvailable > 0 :
    mode === 'bank' ? bankQuestions.length > 0 :
    apiKeyConfigured

  return (
    <div className="space-y-6">
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Generate Practice Test</h2>

          {/* Category Filter Banner */}
          {categoryFilter && (
            <div className="alert alert-info">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>
                Focusing on: <strong>{getTopicName(categoryFilter.categoryCode, categoryFilter.sectionId)}</strong>
                {' '}({categoryFilter.sectionId === 'reading' ? 'Reading & Writing' : 'Math'})
              </span>
              <button className="btn btn-sm btn-ghost" onClick={onClearCategoryFilter}>
                Clear
              </button>
            </div>
          )}

          {/* Mode Selection */}
          <div>
            <div className="text-sm font-medium mb-2">Source</div>
            <div className="join w-fit flex-wrap">
              <button
                className={`btn join-item ${mode === 'review' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setMode('review')}
              >
                Review Past
              </button>
              <button
                className={`btn join-item ${mode === 'bank' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setMode('bank')}
              >
                Question Bank
              </button>
              <button
                className={`btn join-item ${mode === 'ai' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setMode('ai')}
              >
                AI Generated
              </button>
            </div>
            <p className="text-xs text-base-content/60 mt-2">
              {mode === 'ai'
                ? 'Create new questions using AI based on your weak areas'
                : mode === 'bank'
                ? `Pull from question bank, weighted by your weak areas (${bankQuestions.length} available)`
                : `Pull actual questions from your uploaded tests (${totalAvailable} available)`
              }
            </p>
          </div>

          {mode === 'ai' && !apiKeyConfigured && (
            <div className="alert alert-warning mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>OpenAI API key required for AI generation.</span>
              <button className="btn btn-sm btn-ghost" onClick={onOpenSettings}>
                Configure
              </button>
            </div>
          )}

          {mode === 'review' && totalAvailable === 0 && (
            <div className="alert alert-warning mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>No uploaded tests found. Upload some tests first!</span>
            </div>
          )}

          {mode === 'bank' && !bankLoading && bankQuestions.length === 0 && (
            <div className="alert alert-warning mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Question bank is empty. Add questions to /public/bank/</span>
            </div>
          )}

          {/* Section Selection */}
          <div className="mt-4">
            <div className="text-sm font-medium mb-2">Section</div>
            <div className="join w-fit">
              <button
                className={`btn join-item ${section === 'reading' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setSection('reading')}
              >
                Reading & Writing
              </button>
              <button
                className={`btn join-item ${section === 'math' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setSection('math')}
              >
                Math
              </button>
              <button
                className={`btn join-item ${section === 'both' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setSection('both')}
              >
                Both
              </button>
            </div>
          </div>

          {/* Question Count */}
          <div className="mt-4">
            <div className="text-sm font-medium mb-2">Number of Questions</div>
            <div className="join w-fit">
              {questionCounts.map(count => (
                <button
                  key={count}
                  className={`btn join-item ${questionCount === count ? 'btn-primary' : 'btn-ghost'}`}
                  onClick={() => setQuestionCount(count)}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          {/* Wrong/Correct Ratio */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                {mode === 'bank' ? 'Focus on Weak Areas' : 'Question Mix'}
              </span>
              <span className="text-sm text-base-content/60">
                {mode === 'bank'
                  ? `${wrongRatio}% weak areas / ${100 - wrongRatio}% other`
                  : `${wrongRatio}% wrong / ${100 - wrongRatio}% correct`
                }
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={wrongRatio}
              onChange={(e) => setWrongRatio(Number(e.target.value))}
              className="range range-primary"
            />
            <div className="w-full flex justify-between text-xs px-2 mt-1">
              {mode === 'bank' ? (
                <>
                  <span>Random</span>
                  <span>Balanced</span>
                  <span>Weak areas</span>
                </>
              ) : (
                <>
                  <span>All correct</span>
                  <span>Balanced</span>
                  <span>All wrong</span>
                </>
              )}
            </div>
            <p className="text-xs text-base-content/60 mt-2">
              {mode === 'ai'
                ? 'AI will generate questions similar to ones you got wrong/right'
                : mode === 'bank'
                ? 'Weight toward categories where you struggle most'
                : 'Mix of questions you previously got wrong vs correct'
              }
            </p>
          </div>

          {/* Weak/Strength Areas Visibility */}
          {results.filter(r => !r.generated).length > 0 && (
            <div className="mt-6 card bg-base-100 shadow-sm border border-base-300">
              <div className="card-body py-4">
                <h3 className="text-sm font-semibold mb-3">Performance Analysis</h3>
                
                {mode === 'bank' && topWeakAreasForBank.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs font-medium text-base-content/70 mb-2">
                      Top Weak Areas (will be prioritized):
                    </div>
                    <div className="space-y-1">
                      {topWeakAreasForBank.map((area, idx) => {
                        const pct = Math.round(area.errorRate * 100)
                        return (
                          <div key={area.code} className="flex items-center justify-between text-xs bg-error/10 p-2 rounded">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-error/70">#{idx + 1}</span>
                              <span className="font-medium">{getTopicName(area.code, area.sectionId)}</span>
                              <span className="text-base-content/50">({area.sectionId})</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-error">{area.wrong}/{area.total} wrong</span>
                              <span className="font-bold text-error">{pct}%</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="text-xs text-base-content/50 mt-2">
                      {wrongRatio}% of questions will come from these weak areas
                    </div>
                  </div>
                )}

                {mode === 'review' && reviewModeBreakdown.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs font-medium text-base-content/70 mb-2">
                      Available Questions by Category (prioritizing weak areas):
                    </div>
                    <div className="space-y-1 max-h-48 overflow-y-auto">
                      {reviewModeBreakdown.map((area) => {
                        const wrongCount = Math.round(questionCount * (wrongRatio / 100))
                        const correctCount = questionCount - wrongCount
                        const availableWrong = Math.min(area.wrong, wrongCount)
                        const availableCorrect = Math.min(area.correct, correctCount)
                        const willSelect = Math.min(availableWrong + availableCorrect, questionCount)
                        const errorRate = area.total > 0 ? Math.round((area.wrong / area.total) * 100) : 0
                        
                        return (
                          <div key={area.code} className="flex items-center justify-between text-xs bg-base-200 p-2 rounded">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{getTopicName(area.code, area.sectionId)}</span>
                              <span className="text-base-content/50">({area.sectionId})</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-error">{area.wrong} wrong</span>
                              <span className="text-success">{area.correct} correct</span>
                              <span className="text-base-content/50">({area.total} total)</span>
                              {errorRate > 0 && (
                                <span className="text-error/70 font-medium">{errorRate}% error</span>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="text-xs text-base-content/50 mt-2">
                      Will select ~{Math.round(questionCount * (wrongRatio / 100))} wrong and ~{questionCount - Math.round(questionCount * (wrongRatio / 100))} correct questions
                      {relevantWeakAreas.length > 0 && (
                        <span className="block mt-1">
                          Prioritizing questions from weak areas: {relevantWeakAreas.slice(0, 3).map(w => getTopicName(w.code, w.sectionId)).join(', ')}
                          {relevantWeakAreas.length > 3 && '...'}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {mode === 'ai' && relevantWeakAreas.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs font-medium text-base-content/70 mb-2">
                      Weak Areas (AI will focus on similar topics):
                    </div>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {relevantWeakAreas.slice(0, 5).map((area, idx) => {
                        const pct = Math.round(area.errorRate * 100)
                        return (
                          <div key={area.code} className="flex items-center justify-between text-xs bg-error/10 p-2 rounded">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{getTopicName(area.code, area.sectionId)}</span>
                              <span className="text-base-content/50">({area.sectionId})</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-error">{area.wrong}/{area.total} wrong</span>
                              <span className="font-bold text-error">{pct}%</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="text-xs text-base-content/50 mt-2">
                      AI will use 70% incorrect and 30% correct examples from your history
                    </div>
                  </div>
                )}

                {/* Strength Areas (collapsible) */}
                {strengthAreas.length > 0 && (
                  <details className="mt-4">
                    <summary className="text-xs font-medium text-base-content/70 cursor-pointer">
                      Strength Areas (best performance) ▼
                    </summary>
                    <div className="space-y-1 mt-2 max-h-32 overflow-y-auto">
                      {strengthAreas.slice(0, 5).map((area) => {
                        const pct = Math.round((1 - area.errorRate) * 100)
                        return (
                          <div key={area.code} className="flex items-center justify-between text-xs bg-success/10 p-2 rounded">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{getTopicName(area.code, area.sectionId)}</span>
                              <span className="text-base-content/50">({area.sectionId})</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-success">{area.total - area.wrong}/{area.total} correct</span>
                              <span className="font-bold text-success">{pct}%</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </details>
                )}

                {relevantWeakAreas.length === 0 && (
                  <div className="text-xs text-base-content/50">
                    No category data available from uploaded tests. Upload tests with category metadata to see weak areas.
                  </div>
                )}
              </div>
            </div>
          )}

          {loading && progress.total > 1 && (
            <div className="mt-4">
              <progress
                className="progress progress-primary w-full"
                value={progress.current}
                max={progress.total}
              />
            </div>
          )}

          {error && (
            <div className="alert alert-error mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="alert alert-success mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Test created! Go to Results to take it.</span>
            </div>
          )}

          <div className="card-actions justify-end mt-4">
            <button
              className={`btn btn-primary ${loading ? 'loading' : ''}`}
              onClick={handleGenerate}
              disabled={loading || !canGenerate}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Generating {progress.current} of {progress.total}...
                </>
              ) : (
                mode === 'ai' ? 'Generate with AI' :
                mode === 'bank' ? 'Create from Bank' :
                'Create Review Test'
              )}
            </button>
          </div>
        </div>
      </div>

      {mode === 'review' && totalAvailable > 0 && (
        <div className="card bg-base-200/50 shadow-sm">
          <div className="card-body py-4">
            <p className="text-sm text-base-content/60">
              <span className="font-medium">Available questions:</span>{' '}
              {availableQuestions.reading.length} Reading & Writing, {availableQuestions.math.length} Math
              <br />
              <span className="font-medium">By result:</span>{' '}
              {availableQuestions.wrong.length} wrong, {availableQuestions.correct.length} correct
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
