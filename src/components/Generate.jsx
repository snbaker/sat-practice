import { useState, useMemo } from 'react'
import { hasApiKey, generateTest } from '../services/openai'

export default function Generate({ results, onTestGenerated, onOpenSettings }) {
  const [mode, setMode] = useState('ai') // 'ai' or 'review'
  const [section, setSection] = useState('both')
  const [questionCount, setQuestionCount] = useState(5)
  const [wrongRatio, setWrongRatio] = useState(70) // percentage of wrong questions
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState({ current: 0, total: 0 })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const questionCounts = [5, 10, 20]

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

      const newResult = {
        data: testData,
        id: Date.now(),
        uploadedAt: new Date().toISOString(),
        name: `AI Practice - ${new Date().toLocaleDateString()}`,
        generated: true,
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

    if (pool.length === 0) {
      setError('No questions available from uploaded tests. Upload some tests first!')
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

    // Select questions
    const selectedWrong = shuffle(wrongPool).slice(0, wrongCount)
    const selectedCorrect = shuffle(correctPool).slice(0, correctCount)
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

    const newResult = {
      data: testData,
      id: Date.now(),
      uploadedAt: new Date().toISOString(),
      name: `Review Practice - ${new Date().toLocaleDateString()}`,
      generated: true,
      taken: false
    }

    onTestGenerated(newResult)
    setSuccess(true)
  }

  const handleGenerate = () => {
    if (mode === 'ai') {
      handleGenerateAI()
    } else {
      handleGenerateReview()
    }
  }

  const apiKeyConfigured = hasApiKey()
  const canGenerate = mode === 'review' ? totalAvailable > 0 : apiKeyConfigured

  return (
    <div className="space-y-6">
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Generate Practice Test</h2>

          {/* Mode Selection */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Source</span>
            </label>
            <div className="join">
              <button
                className={`btn join-item ${mode === 'ai' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setMode('ai')}
              >
                AI Generated
              </button>
              <button
                className={`btn join-item ${mode === 'review' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setMode('review')}
              >
                Review Past Questions
              </button>
            </div>
            <p className="text-xs text-base-content/60 mt-1">
              {mode === 'ai'
                ? 'Create new questions using AI based on your weak areas'
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

          {/* Section Selection */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text font-medium">Section</span>
            </label>
            <div className="join">
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
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text font-medium">Number of Questions</span>
            </label>
            <div className="join">
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
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text font-medium">Question Mix</span>
              <span className="label-text-alt">{wrongRatio}% wrong / {100 - wrongRatio}% correct</span>
            </label>
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
              <span>All correct</span>
              <span>Balanced</span>
              <span>All wrong</span>
            </div>
            <p className="text-xs text-base-content/60 mt-2">
              {mode === 'ai'
                ? 'AI will generate questions similar to ones you got wrong/right'
                : 'Mix of questions you previously got wrong vs correct'
              }
            </p>
          </div>

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
                mode === 'ai' ? 'Generate with AI' : 'Create Review Test'
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
