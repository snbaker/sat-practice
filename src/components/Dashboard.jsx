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

  const sortedResults = [...results].sort((a, b) => new Date(a.date) - new Date(b.date))
  const latestResult = sortedResults[sortedResults.length - 1]
  const previousResult = sortedResults.length > 1 ? sortedResults[sortedResults.length - 2] : null

  const averageScore = Math.round(
    results.reduce((sum, r) => sum + (r.totalScore || 0), 0) / results.length
  )

  const highestScore = Math.max(...results.map(r => r.totalScore || 0))

  const scoreDiff = previousResult
    ? (latestResult.totalScore || 0) - (previousResult.totalScore || 0)
    : null

  return (
    <div className="space-y-6">
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-200">
        <div className="stat">
          <div className="stat-title">Tests Taken</div>
          <div className="stat-value text-primary">{results.length}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Latest Score</div>
          <div className="stat-value">{latestResult.totalScore || '-'}</div>
          {scoreDiff !== null && (
            <div className={`stat-desc ${scoreDiff >= 0 ? 'text-success' : 'text-error'}`}>
              {scoreDiff >= 0 ? '+' : ''}{scoreDiff} from previous
            </div>
          )}
        </div>

        <div className="stat">
          <div className="stat-title">Average Score</div>
          <div className="stat-value">{averageScore}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Highest Score</div>
          <div className="stat-value text-success">{highestScore}</div>
        </div>
      </div>

      {sortedResults.length > 1 && (
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h3 className="card-title">Score Progress</h3>
            <div className="w-full h-48 flex items-end gap-2 pt-4">
              {sortedResults.map((result, idx) => {
                const score = result.totalScore || 0
                const heightPercent = (score / 1600) * 100
                return (
                  <div
                    key={result.id || idx}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <span className="text-xs font-medium">{score}</span>
                    <div
                      className="w-full bg-primary rounded-t transition-all"
                      style={{ height: `${heightPercent}%`, minHeight: '4px' }}
                    />
                    <span className="text-xs text-base-content/60 truncate w-full text-center">
                      {new Date(result.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
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
