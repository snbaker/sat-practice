import { isRichFormat, getTotalScore } from '../utils/dataTransform'

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

  // Helper to get score from a result (handles both formats)
  const getScore = (result) => {
    const { data } = result
    if (isRichFormat(data)) {
      return getTotalScore(data)
    }
    return data.totalScore || 0
  }

  // Helper to get date from a result
  const getDate = (result) => {
    return result.data?.date || result.uploadedAt
  }

  const sortedResults = [...results].sort((a, b) => new Date(getDate(a)) - new Date(getDate(b)))
  const latestResult = sortedResults[sortedResults.length - 1]
  const previousResult = sortedResults.length > 1 ? sortedResults[sortedResults.length - 2] : null

  const latestScore = getScore(latestResult)
  const previousScore = previousResult ? getScore(previousResult) : null

  const averageScore = Math.round(
    results.reduce((sum, r) => sum + getScore(r), 0) / results.length
  )

  const highestScore = Math.max(...results.map(r => getScore(r)))

  const scoreDiff = previousScore !== null ? latestScore - previousScore : null

  return (
    <div className="space-y-6">
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-200">
        <div className="stat">
          <div className="stat-title">Tests Taken</div>
          <div className="stat-value text-primary">{results.length}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Latest Score</div>
          <div className="stat-value">{latestScore || '-'}</div>
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
                const score = getScore(result)
                const heightPercent = (score / 1600) * 100
                const date = getDate(result)
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
