import { isRichFormat, getAllSectionStats } from '../utils/dataTransform'

export default function Dashboard({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Upload your first practice test to see your progress!</span>
      </div>
    )
  }

  // Helper to get stats from a result
  const getStats = (result) => {
    const { data } = result
    if (isRichFormat(data)) {
      const sections = getAllSectionStats(data)
      const total = sections.reduce((sum, s) => sum + s.total, 0)
      const correct = sections.reduce((sum, s) => sum + s.correct, 0)
      return { total, correct, incorrect: total - correct }
    }
    const sections = data.sections || []
    const total = sections.reduce((sum, s) => sum + (s.total || 0), 0)
    const correct = sections.reduce((sum, s) => sum + (s.correct || 0), 0)
    return { total, correct, incorrect: total - correct }
  }

  // Helper to get date from a result
  const getDate = (result) => {
    return result.data?.date || result.uploadedAt
  }

  const sortedResults = [...results].sort((a, b) => new Date(getDate(a)) - new Date(getDate(b)))

  // Aggregate stats across all tests
  const allStats = results.map(getStats)
  const totalQuestions = allStats.reduce((sum, s) => sum + s.total, 0)
  const totalCorrect = allStats.reduce((sum, s) => sum + s.correct, 0)
  const totalIncorrect = totalQuestions - totalCorrect
  const overallPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Latest test stats
  const latestStats = getStats(sortedResults[sortedResults.length - 1])
  const latestPct = latestStats.total > 0 ? Math.round((latestStats.correct / latestStats.total) * 100) : 0

  return (
    <div className="space-y-6">
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-200">
        <div className="stat">
          <div className="stat-title">Tests Taken</div>
          <div className="stat-value text-primary">{results.length}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Questions</div>
          <div className="stat-value">{totalQuestions}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Correct Answers</div>
          <div className="stat-value text-success">{totalCorrect}</div>
          <div className="stat-desc">{overallPct}% overall</div>
        </div>

        <div className="stat">
          <div className="stat-title">Incorrect Answers</div>
          <div className="stat-value text-error">{totalIncorrect}</div>
        </div>
      </div>

      {sortedResults.length > 1 && (
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h3 className="card-title">Accuracy Over Time</h3>
            <div className="w-full h-48 flex items-end gap-2 pt-4">
              {sortedResults.map((result, idx) => {
                const stats = getStats(result)
                const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0
                const date = getDate(result)
                return (
                  <div
                    key={result.id || idx}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <span className="text-xs font-medium">{pct}%</span>
                    <div
                      className={`w-full rounded-t transition-all ${pct >= 80 ? 'bg-success' : pct >= 60 ? 'bg-warning' : 'bg-error'}`}
                      style={{ height: `${pct}%`, minHeight: '4px' }}
                    />
                    <span className="text-xs text-base-content/60 truncate w-full text-center">
                      {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
