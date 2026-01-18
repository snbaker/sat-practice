import { useState, useEffect } from 'react'
import DropZone from './components/DropZone'
import TestResults from './components/TestResults'
import Dashboard from './components/Dashboard'

const STORAGE_KEY = 'sat-practice-results'

function App() {
  const [results, setResults] = useState([])
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setResults(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to load stored results:', e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(results))
  }, [results])

  const handleFileLoad = (data) => {
    const newResult = {
      data,
      id: Date.now(),
      uploadedAt: new Date().toISOString()
    }
    setResults(prev => [...prev, newResult])
    setActiveTab('results')
  }

  const handleDelete = (id) => {
    setResults(prev => prev.filter(r => r.id !== id))
  }

  const handleClearAll = () => {
    if (confirm('Are you sure you want to delete all results?')) {
      setResults([])
    }
  }

  return (
    <div className="min-h-screen bg-base-100" data-theme="dark">
      <div className="navbar bg-base-200 shadow-lg">
        <div className="flex-1">
          <span className="text-xl font-bold px-4">SAT Practice Tracker</span>
        </div>
        {results.length > 0 && (
          <div className="flex-none">
            <button className="btn btn-ghost btn-sm text-error" onClick={handleClearAll}>
              Clear All
            </button>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div role="tablist" className="tabs tabs-boxed mb-6">
          <button
            role="tab"
            className={`tab ${activeTab === 'dashboard' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            role="tab"
            className={`tab ${activeTab === 'upload' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            Upload
          </button>
          <button
            role="tab"
            className={`tab ${activeTab === 'results' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('results')}
          >
            Results ({results.length})
          </button>
        </div>

        {activeTab === 'dashboard' && <Dashboard results={results} />}

        {activeTab === 'upload' && (
          <div className="space-y-4">
            <DropZone onFileLoad={handleFileLoad} />
            <div className="text-sm text-base-content/60">
              <p className="font-medium mb-2">Supported JSON formats:</p>
              <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="format-accordion" defaultChecked />
                <div className="collapse-title text-sm font-medium">
                  Question-level format (detailed)
                </div>
                <div className="collapse-content">
                  <pre className="bg-base-300 p-3 rounded-lg overflow-x-auto text-xs">
{`[
  {
    "id": "reading",
    "items": [
      {
        "answer": { "correct": true },
        "prompt": "Question text..."
      }
    ]
  },
  {
    "id": "math",
    "items": [...]
  }
]`}
                  </pre>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="format-accordion" />
                <div className="collapse-title text-sm font-medium">
                  Summary format
                </div>
                <div className="collapse-content">
                  <pre className="bg-base-300 p-3 rounded-lg overflow-x-auto text-xs">
{`{
  "name": "Practice Test 1",
  "date": "2024-01-15",
  "totalScore": 1420,
  "sections": [
    {
      "name": "Reading & Writing",
      "score": 720,
      "correct": 45,
      "total": 54
    }
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div className="space-y-4">
            {results.length === 0 ? (
              <div className="alert">
                <span>No results yet. Upload a JSON file to get started!</span>
              </div>
            ) : (
              [...results]
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map(result => (
                  <TestResults
                    key={result.id}
                    result={result}
                    onDelete={handleDelete}
                  />
                ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
