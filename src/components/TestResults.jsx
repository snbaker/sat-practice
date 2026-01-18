export default function TestResults({ result, onDelete }) {
  const { date, name, sections, totalScore, id } = result

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

  return (
    <div className="card bg-base-200 shadow-md">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="card-title">{name || 'Practice Test'}</h3>
            <p className="text-sm text-base-content/60">{formatDate(date)}</p>
          </div>
          {totalScore !== undefined && (
            <div className="text-right">
              <div className={`text-3xl font-bold ${getScoreColor(totalScore, 1600)}`}>
                {totalScore}
              </div>
              <div className="text-xs text-base-content/60">/ 1600</div>
            </div>
          )}
        </div>

        {sections && sections.length > 0 && (
          <div className="divider my-2"></div>
        )}

        {sections && sections.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section, idx) => (
              <div key={idx} className="stat bg-base-100 rounded-lg p-4">
                <div className="stat-title">{section.name}</div>
                <div className={`stat-value text-2xl ${getScoreColor(section.score, section.maxScore || 800)}`}>
                  {section.score}
                  <span className="text-sm text-base-content/60 font-normal">
                    {' '}/ {section.maxScore || 800}
                  </span>
                </div>
                {section.correct !== undefined && section.total !== undefined && (
                  <div className="stat-desc">
                    {section.correct} / {section.total} correct ({Math.round((section.correct / section.total) * 100)}%)
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
