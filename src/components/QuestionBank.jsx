import { useState, useEffect, useMemo } from 'react'
import { getTopicName } from '../utils/topicMappings'
import { getQuestions, getCurrentUser } from '../services/supabase'

export default function QuestionBank() {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [useSupabase, setUseSupabase] = useState(false)

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

  // Check if user is authenticated and Supabase is available
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

  // Load bank questions
  useEffect(() => {
    const loadBank = async () => {
      try {
        if (useSupabase) {
          // Load from Supabase
          const data = await getQuestions()
          setQuestions(data)
        } else {
          // Fallback to local file
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
          setQuestions(allQuestions)
        }
      } catch (e) {
        setError(e.message)
        console.error('Error loading questions:', e)
      } finally {
        setLoading(false)
      }
    }
    if (useSupabase !== null) {
      loadBank()
    }
  }, [useSupabase])

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
    if (typeof value === 'string') return value.trim() || null
    if (typeof value === 'number') return String(value)
    if (value.body) return renderContent(value.body)
    if (value.html) return renderContent(value.html)
    if (value.text) return renderContent(value.text)
    return null
  }

  // Trigger MathJax rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.MathJax?.typesetPromise) {
        window.MathJax.typesetPromise().catch(err => console.log('MathJax error:', err))
      }
    }, 100)
    return () => clearTimeout(timer)
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

  if (questions.length === 0) {
    return (
      <div className="alert alert-info">
        <span>No questions in the bank yet. Add question files to /public/bank/</span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
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
              className="card bg-base-200 shadow-md"
            >
              <div
                className="card-body py-4 cursor-pointer"
                onClick={() => setExpandedQuestion(isExpanded ? null : q.questionId)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex flex-col gap-1">
                    <span className={`badge badge-sm ${q.sectionId === 'math' ? 'badge-secondary' : 'badge-primary'}`}>
                      {q.sectionId === 'reading' ? 'R&W' : 'Math'}
                    </span>
                    {q.metadata?.difficulty && (
                      <span className={`badge badge-sm badge-outline ${
                        q.metadata.difficulty === 'Easy' ? 'badge-success' :
                        q.metadata.difficulty === 'Medium' ? 'badge-warning' : 'badge-error'
                      }`}>
                        {q.metadata.difficulty}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-sm [&_math]:inline ${!isExpanded ? 'line-clamp-2' : ''}`}
                      dangerouslySetInnerHTML={{ __html: q.prompt }}
                    />
                    <div className="flex flex-wrap gap-2 mt-2 text-xs text-base-content/60">
                      {q.metadata?.domain && (
                        <span className="badge badge-ghost badge-xs">{q.metadata.domain}</span>
                      )}
                      {q.metadata?.skill && (
                        <span className="badge badge-ghost badge-xs">{q.metadata.skill}</span>
                      )}
                      <span className="text-base-content/40">ID: {q.questionId}</span>
                    </div>
                  </div>

                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {isExpanded && (
                  <div className="mt-4 space-y-4 border-t border-base-300 pt-4">
                    {/* Answer Choices */}
                    {q.answer?.choices && (
                      <div>
                        <div className="text-xs font-medium text-base-content/60 mb-2">Answer Choices</div>
                        <div className="space-y-2">
                          {Object.entries(q.answer.choices).map(([key, value]) => (
                            <div
                              key={key}
                              className={`p-2 rounded text-sm flex gap-2 ${
                                key === q.answer.correctChoice
                                  ? 'bg-success/20 text-success'
                                  : 'bg-base-100'
                              }`}
                            >
                              <span className="font-bold">{key}.</span>
                              <span dangerouslySetInnerHTML={{ __html: renderContent(value) }} />
                              {key === q.answer.correctChoice && (
                                <span className="badge badge-success badge-xs ml-auto">Correct</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Rationale */}
                    {q.answer?.rationale && (
                      <div>
                        <div className="text-xs font-medium text-base-content/60 mb-1">Explanation</div>
                        <div
                          className="text-sm bg-base-100 p-3 rounded [&_math]:inline"
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
