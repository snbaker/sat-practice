import { useState, useEffect, useMemo } from 'react'
import { getTopicName } from '../utils/topicMappings'
import { getQuestions, getCurrentUser, syncQuestionsFromLocal, clearAllQuestions } from '../services/supabase'

export default function QuestionBank() {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [useSupabase, setUseSupabase] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const [syncProgress, setSyncProgress] = useState(null)

  // Filters
  const [sectionFilter, setSectionFilter] = useState('all')
  const [domainFilter, setDomainFilter] = useState('all')
  const [difficultyFilter, setDifficultyFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    const saved = localStorage.getItem('sat-practice-questionBankItemsPerPage')
    return saved ? parseInt(saved, 10) : 25
  })

  // Check if user is authenticated and Supabase is available, then load questions
  useEffect(() => {
    let mounted = true
    
    const checkAndLoad = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Check auth and Supabase availability
        const user = await getCurrentUser()
        const hasSupabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const shouldUseSupabase = !!(user && hasSupabaseUrl)
        
        if (!mounted) return
        setUseSupabase(shouldUseSupabase)
        
        if (shouldUseSupabase) {
          // Load from Supabase
          console.log('Loading questions from Supabase...')
          try {
            const data = await getQuestions()
            if (!mounted) return
            console.log(`Loaded ${data?.length || 0} questions from Supabase`)
            if (data && data.length > 0) {
              setQuestions(data)
            } else {
              // Supabase returned empty - fallback to local
              console.warn('Supabase returned 0 questions, falling back to local file...')
              const response = await fetch('/bank/question-bank.json')
              if (!response.ok) throw new Error('Failed to load question bank')
              const localData = await response.json()
              const allQuestions = localData.flatMap(section =>
                (section.items || []).map(item => ({
                  ...item,
                  sectionId: section.id
                }))
              )
              console.log(`Loaded ${allQuestions.length} questions from local file (fallback)`)
              setQuestions(allQuestions)
            }
          } catch (supabaseError) {
            console.error('Supabase error:', supabaseError)
            // Fallback to local on Supabase error
            if (!mounted) return
            const response = await fetch('/bank/question-bank.json')
            if (!response.ok) throw new Error('Failed to load question bank')
            const localData = await response.json()
            const allQuestions = localData.flatMap(section =>
              (section.items || []).map(item => ({
                ...item,
                sectionId: section.id
              }))
            )
            console.log(`Loaded ${allQuestions.length} questions from local file (fallback after error)`)
            setQuestions(allQuestions)
            setError(`Supabase error: ${supabaseError.message}. Using local questions.`)
          }
        } else {
          // Fallback to local file
          console.log('Loading questions from local file...')
          const response = await fetch('/bank/question-bank.json')
          if (!response.ok) throw new Error('Failed to load question bank')
          const data = await response.json()

          // Flatten questions from all sections
          const allQuestions = data.flatMap(section =>
            (section.items || []).map(item => ({
              ...item,
              sectionId: section.id
            }))
          )
          if (!mounted) return
          console.log(`Loaded ${allQuestions.length} questions from local file`)
          setQuestions(allQuestions)
        }
      } catch (e) {
        if (!mounted) return
        console.error('Error loading questions:', e)
        setError(e.message || 'Failed to load questions')
        setQuestions([])
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }
    
    checkAndLoad()
    
    return () => {
      mounted = false
    }
  }, [])

  // Get unique filter options
  const filterOptions = useMemo(() => {
    const domains = new Set()
    const difficulties = new Set()
    const sections = new Set()

    questions.forEach(q => {
      if (q.sectionId) sections.add(q.sectionId)
      if (q.metadata?.domain) domains.add(q.metadata.domain)
      if (q.metadata?.PRIMARY_CLASS_CD) domains.add(q.metadata.PRIMARY_CLASS_CD)
      if (q.metadata?.difficulty) difficulties.add(q.metadata.difficulty)
    })

    return {
      sections: Array.from(sections),
      domains: Array.from(domains),
      difficulties: Array.from(difficulties)
    }
  }, [questions])

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      // Section filter
      if (sectionFilter !== 'all' && q.sectionId !== sectionFilter) return false

      // Domain filter
      if (domainFilter !== 'all') {
        const qDomain = q.metadata?.domain || q.metadata?.PRIMARY_CLASS_CD
        if (qDomain !== domainFilter) return false
      }

      // Difficulty filter
      if (difficultyFilter !== 'all' && q.metadata?.difficulty !== difficultyFilter) return false

      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const promptMatch = q.prompt?.toLowerCase().includes(query)
        const skillMatch = q.metadata?.skill?.toLowerCase().includes(query)
        if (!promptMatch && !skillMatch) return false
      }

      return true
    })
  }, [questions, sectionFilter, domainFilter, difficultyFilter, searchQuery])

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [sectionFilter, domainFilter, difficultyFilter, searchQuery, itemsPerPage])

  // Save items per page preference
  useEffect(() => {
    localStorage.setItem('sat-practice-questionBankItemsPerPage', itemsPerPage.toString())
  }, [itemsPerPage])

  // Pagination calculations
  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedQuestions = filteredQuestions.slice(startIndex, endIndex)

  const renderContent = (value) => {
    if (!value) return null
    if (typeof value === 'string') {
      let content = value.trim() || null
      if (!content) return null
      // Fix double-escaped MathJax delimiters (if Supabase stored them as \\( instead of \()
      // Use split/join to avoid regex escaping issues
      // Replace \\( with \(
      content = content.split('\\\\(').join('\\(')
      // Replace \\) with \)
      content = content.split('\\\\)').join('\\)')
      // Replace \\[ with \[
      content = content.split('\\\\[').join('\\[')
      // Replace \\] with \]
      content = content.split('\\\\]').join('\\]')
      return content
    }
    if (typeof value === 'number') return String(value)
    if (value.body) return renderContent(value.body)
    if (value.html) return renderContent(value.html)
    if (value.text) return renderContent(value.text)
    return null
  }

  // Trigger MathJax rendering
  useEffect(() => {
    const renderMath = () => {
      if (window.MathJax?.typesetPromise) {
        // Use typesetPromise with a longer delay to ensure DOM is ready
        setTimeout(() => {
          window.MathJax.typesetPromise().catch(err => console.log('MathJax error:', err))
        }, 150)
      } else if (window.MathJax?.typeset) {
        setTimeout(() => {
          window.MathJax.typeset()
        }, 150)
      }
    }
    
    // Wait for MathJax to load and then render
    if (window.MathJax?.startup) {
      // MathJax is ready
      renderMath()
    } else if (window.MathJax) {
      // MathJax is loading
      const timer = setTimeout(renderMath, 200)
      return () => clearTimeout(timer)
    } else {
      // Wait for MathJax to load
      const checkMathJax = setInterval(() => {
        if (window.MathJax) {
          clearInterval(checkMathJax)
          renderMath()
        }
      }, 100)
      return () => clearInterval(checkMathJax)
    }
  }, [paginatedQuestions, expandedQuestion])

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <span>{error}</span>
      </div>
    )
  }

  const handleSyncToSupabase = async () => {
    if (!useSupabase) {
      setError('You must be authenticated to sync questions to Supabase')
      return
    }
    
    setSyncing(true)
    setError(null)
    setSyncProgress('Loading questions from local file...')
    
    try {
      await syncQuestionsFromLocal()
      setSyncProgress('Sync complete! Reloading questions...')
      
      // Reload questions from Supabase
      const data = await getQuestions()
      setQuestions(data || [])
      setSyncProgress(null)
      
      // Show success message briefly
      setTimeout(() => {
        setSyncProgress(null)
      }, 2000)
    } catch (e) {
      console.error('Sync error:', e)
      setError(e.message || 'Failed to sync questions to Supabase')
      setSyncProgress(null)
    } finally {
      setSyncing(false)
    }
  }

  const handleClearAll = async () => {
    if (!useSupabase) {
      setError('You must be authenticated to clear questions')
      return
    }
    
    if (!confirm('Are you sure you want to delete ALL questions from Supabase? This cannot be undone.')) {
      return
    }
    
    setSyncing(true)
    setError(null)
    setSyncProgress('Clearing all questions...')
    
    try {
      await clearAllQuestions()
      setSyncProgress('All questions cleared. Reloading...')
      
      // Reload questions (should be empty now)
      const data = await getQuestions()
      setQuestions(data || [])
      setSyncProgress(null)
      
      setTimeout(() => {
        setSyncProgress(null)
      }, 2000)
    } catch (e) {
      console.error('Clear error:', e)
      setError(e.message || 'Failed to clear questions')
      setSyncProgress(null)
    } finally {
      setSyncing(false)
    }
  }

  if (questions.length === 0 && !loading) {
    return (
      <div className="space-y-4">
        {error && (
          <div className="alert alert-error">
            <span>Error: {error}</span>
          </div>
        )}
        {syncProgress && (
          <div className="alert alert-info">
            <span className="loading loading-spinner loading-sm mr-2"></span>
            {syncProgress}
          </div>
        )}
        <div className="alert alert-info">
          <div className="flex items-center justify-between">
            <span>
              {useSupabase 
                ? 'No questions found in Supabase. Sync questions from local file to get started.'
                : 'No questions in the bank yet. Add question files to /public/bank/'
              }
            </span>
            {useSupabase && (
              <button
                className="btn btn-primary btn-sm ml-4"
                onClick={handleSyncToSupabase}
                disabled={syncing}
              >
                {syncing ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Syncing...
                  </>
                ) : (
                  'Sync Questions to Supabase'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Sync/Clear buttons and progress */}
      {useSupabase && (
        <div className="flex justify-end items-center gap-2">
          {syncProgress && (
            <div className="alert alert-info py-2">
              <span className="loading loading-spinner loading-sm mr-2"></span>
              {syncProgress}
            </div>
          )}
          <button
            className="btn btn-error btn-outline btn-sm"
            onClick={handleClearAll}
            disabled={syncing}
            title="Clear all questions from Supabase"
          >
            {syncing ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Clearing...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                Clear All
              </>
            )}
          </button>
          <button
            className="btn btn-outline btn-sm"
            onClick={handleSyncToSupabase}
            disabled={syncing}
            title="Sync questions from local file to Supabase"
          >
            {syncing ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Syncing...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                Sync to Supabase
              </>
            )}
          </button>
        </div>
      )}
      {/* Filters */}
      <div className="card bg-base-200 shadow-md">
        <div className="card-body py-4">
          <div className="flex flex-wrap gap-4 items-end">
            {/* Search */}
            <div className="flex-1 min-w-48">
              <div className="text-sm font-medium mb-1">Search</div>
              <input
                type="text"
                placeholder="Search questions..."
                className="input input-bordered input-sm w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Section Filter */}
            <div>
              <div className="text-sm font-medium mb-1">Section</div>
              <select
                className="select select-bordered select-sm"
                value={sectionFilter}
                onChange={(e) => setSectionFilter(e.target.value)}
              >
                <option value="all">All Sections</option>
                {filterOptions.sections.map(s => (
                  <option key={s} value={s}>
                    {s === 'reading' ? 'Reading & Writing' : s === 'math' ? 'Math' : s}
                  </option>
                ))}
              </select>
            </div>

            {/* Domain Filter */}
            <div>
              <div className="text-sm font-medium mb-1">Domain</div>
              <select
                className="select select-bordered select-sm"
                value={domainFilter}
                onChange={(e) => setDomainFilter(e.target.value)}
              >
                <option value="all">All Domains</option>
                {filterOptions.domains.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <div className="text-sm font-medium mb-1">Difficulty</div>
              <select
                className="select select-bordered select-sm"
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
              >
                <option value="all">All Difficulties</option>
                {filterOptions.difficulties.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {(sectionFilter !== 'all' || domainFilter !== 'all' || difficultyFilter !== 'all' || searchQuery) && (
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => {
                  setSectionFilter('all')
                  setDomainFilter('all')
                  setDifficultyFilter('all')
                  setSearchQuery('')
                }}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results count and pagination controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm text-base-content/60">
          Showing {filteredQuestions.length === 0 ? 0 : startIndex + 1}-{Math.min(endIndex, filteredQuestions.length)} of {filteredQuestions.length} questions
          {filteredQuestions.length !== questions.length && ` (${questions.length} total)`}
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-base-content/60">Per page:</label>
            <select
              className="select select-bordered select-sm w-20"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(parseInt(e.target.value, 10))
                setCurrentPage(1)
              }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
          </div>
          
          {totalPages > 1 && (
            <div className="join">
              <button
                className="join-item btn btn-sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                «
              </button>
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                let pageNum
                if (totalPages <= 7) {
                  pageNum = i + 1
                } else if (currentPage <= 4) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + i
                } else {
                  pageNum = currentPage - 3 + i
                }
                
                return (
                  <button
                    key={pageNum}
                    className={`join-item btn btn-sm ${currentPage === pageNum ? 'btn-active' : ''}`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                )
              })}
              <button
                className="join-item btn btn-sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {paginatedQuestions.map((q, idx) => {
          const isExpanded = expandedQuestion === q.questionId

          return (
            <div
              key={q.questionId || idx}
              className="card bg-base-100 shadow-md border border-base-300"
            >
              <div
                className="card-body py-4 cursor-pointer"
                onClick={() => setExpandedQuestion(isExpanded ? null : q.questionId)}
              >
                <div className="flex items-start gap-4">
                  {/* Left side: Badges stacked vertically */}
                  <div className="flex flex-col gap-1.5 shrink-0">
                    <span className={`badge ${q.sectionId === 'math' ? 'badge-secondary' : 'badge-primary'}`}>
                      {q.sectionId === 'reading' ? 'Reading' : 'Math'}
                    </span>
                    {q.metadata?.difficulty && (
                      <span className={`badge ${
                        q.metadata.difficulty === 'Easy' ? 'badge-success' :
                        q.metadata.difficulty === 'Medium' ? 'badge-warning' : 'badge-error'
                      }`}>
                        {q.metadata.difficulty}
                      </span>
                    )}
                  </div>

                  {/* Middle: Question prompt and categories */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-base leading-relaxed [&_math]:inline [&_mjx-container]:!inline-block [&_mjx-container]:align-baseline ${!isExpanded ? 'line-clamp-2' : ''}`}
                      style={{ lineHeight: '1.6' }}
                      dangerouslySetInnerHTML={{ __html: renderContent(q.prompt) }}
                    />
                    {/* Categories row */}
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
                      {q.metadata?.PRIMARY_CLASS_CD && (
                        <span className="text-base-content/70">{getTopicName(q.metadata.PRIMARY_CLASS_CD, q.sectionId)}</span>
                      )}
                      {q.metadata?.SECONDARY_CLASS_CD && (
                        <>
                          {q.metadata?.PRIMARY_CLASS_CD && <span className="text-base-content/40">•</span>}
                          <span className="text-base-content/70">{getTopicName(q.metadata.SECONDARY_CLASS_CD, q.sectionId)}</span>
                        </>
                      )}
                      {q.metadata?.domain && !q.metadata?.PRIMARY_CLASS_CD && (
                        <span className="text-base-content/70">{q.metadata.domain}</span>
                      )}
                      {q.metadata?.skill && !q.metadata?.SECONDARY_CLASS_CD && (
                        <>
                          {q.metadata?.domain && <span className="text-base-content/40">•</span>}
                          <span className="text-base-content/70">{q.metadata.skill}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right side: ID and chevron */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-base-content/50 font-mono">{q.questionId}</span>
                    <svg
                      className={`w-5 h-5 text-base-content/40 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-4 space-y-4 border-t border-base-300 pt-4">
                    {/* Passage */}
                    {q.passage && (
                      <div className="bg-base-100 border border-base-300 p-4 rounded-lg">
                        <div className="text-xs font-medium text-base-content/60 mb-2">Passage</div>
                        <div
                          className="text-sm leading-relaxed [&_math]:inline [&_mjx-container]:!inline-block [&_mjx-container]:align-middle prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: renderContent(q.passage) }}
                        />
                      </div>
                    )}

                    {/* Answer Choices */}
                    {q.answer?.choices && (
                      <div>
                        <div className="text-xs font-medium text-base-content/60 mb-2">Answer Choices</div>
                        <div className="space-y-2">
                          {Object.entries(q.answer.choices).map(([key, value]) => (
                            <div
                              key={key}
                              className={`p-3 rounded-lg border-2 flex gap-2 ${
                                key === q.answer.correctChoice
                                  ? 'bg-success/20 text-success border-success/30'
                                  : 'bg-base-100 border-base-300'
                              }`}
                            >
                              <span className="font-bold text-base shrink-0">{key}.</span>
                              <span 
                                className="flex-1 leading-relaxed [&_math]:inline [&_mjx-container]:!inline-block [&_mjx-container]:align-middle"
                                dangerouslySetInnerHTML={{ __html: renderContent(value) }}
                              />
                              {key === q.answer.correctChoice && (
                                <span className="badge badge-success badge-xs ml-auto shrink-0">Correct</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Rationale */}
                    {q.answer?.rationale && (
                      <div>
                        <div className="text-xs font-medium text-base-content/60 mb-2">Explanation</div>
                        <div
                          className="text-sm bg-base-100 border border-base-300 p-4 rounded-lg leading-relaxed [&_math]:inline [&_mjx-container]:!inline-block [&_mjx-container]:align-middle [&_p]:mb-2 [&_p]:last:mb-0"
                          dangerouslySetInnerHTML={{ __html: renderContent(q.answer.rationale) }}
                        />
                      </div>
                    )}

                    {/* Metadata */}
                    <div className="text-xs text-base-content/50">
                      <span>Question ID: {q.questionId}</span>
                      {q.externalId && q.externalId !== q.questionId && (
                        <span> • External ID: {q.externalId}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {filteredQuestions.length === 0 && (
        <div className="alert">
          <span>No questions match your filters.</span>
        </div>
      )}
    </div>
  )
}
