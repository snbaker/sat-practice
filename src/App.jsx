import { useState, useEffect } from 'react'
import DropZone from './components/DropZone'
import TestResults from './components/TestResults'
import Dashboard from './components/Dashboard'
import Analysis from './components/Analysis'
import Generate from './components/Generate'
import Settings from './components/Settings'
import TakeTest from './components/TakeTest'

const STORAGE_KEY = 'sat-practice-results'
const THEME_KEY = 'sat-practice-theme'

function App() {
  const [results, setResults] = useState([])
  const [activeTab, setActiveTab] = useState('dashboard')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [takingTest, setTakingTest] = useState(null)
  const [initialized, setInitialized] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'light'
  })

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (parsed.length > 0) {
          setResults(parsed)
          setInitialized(true)
          return
        }
      } catch (e) {
        console.error('Failed to load stored results:', e)
      }
    }
    // Load sample data if no results
    loadSampleData().then(() => setInitialized(true))
  }, [])

  const loadSampleData = async (merge = false) => {
    try {
      const response = await fetch('/data/samples.json')
      if (!response.ok) return
      const manifest = await response.json()

      const loadedResults = await Promise.all(
        manifest.files.map(async (filename) => {
          const res = await fetch(`/data/${filename}`)
          if (!res.ok) return null
          const data = await res.json()
          return {
            data,
            id: Date.now() + Math.random(),
            uploadedAt: new Date().toISOString(),
            name: filename.replace('.json', '')
          }
        })
      )

      const newResults = loadedResults.filter(Boolean)
      if (merge) {
        // Keep generated tests, replace uploaded tests with fresh sample data
        setResults(prev => [
          ...prev.filter(r => r.generated),
          ...newResults
        ])
      } else {
        setResults(newResults)
      }
    } catch (e) {
      console.log('No sample data found')
    }
  }

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(results))
    }
  }, [results, initialized])

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleFileLoad = (data) => {
    const newResult = {
      data,
      id: Date.now(),
      uploadedAt: new Date().toISOString()
    }
    setResults(prev => [...prev, newResult])
    setActiveTab('history')
  }

  const handleDelete = (id) => {
    setResults(prev => prev.filter(r => r.id !== id))
  }

  const handleClearAll = () => {
    if (confirm('Are you sure you want to delete all results?')) {
      setResults([])
    }
  }

  const handleTestGenerated = (newResult) => {
    setResults(prev => [...prev, newResult])
    setActiveTab('practice')
  }

  const handleTakeTest = (result) => {
    setTakingTest(result)
  }

  const handleTestComplete = (updatedResult) => {
    setResults(prev => prev.map(r => r.id === updatedResult.id ? updatedResult : r))
  }

  const handleCancelTest = () => {
    setTakingTest(null)
  }

  const handleRetakeTest = (result) => {
    // Reset the test to untaken state and clear responses
    const resetData = result.data.map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        answer: {
          ...item.answer,
          correct: false,
          response: undefined
        }
      }))
    }))

    const resetResult = {
      ...result,
      data: resetData,
      taken: false,
      completedAt: undefined
    }

    // Update in results and start test
    setResults(prev => prev.map(r => r.id === result.id ? resetResult : r))
    setTakingTest(resetResult)
  }

  // If taking a test, show the TakeTest component
  if (takingTest) {
    return (
      <div className="min-h-screen bg-base-100" data-theme={theme}>
        <div className="navbar bg-base-200 shadow-lg">
          <div className="flex-1">
            <span className="text-xl font-bold px-4">SAT Practice Tracker</span>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <TakeTest
            result={takingTest}
            onComplete={handleTestComplete}
            onCancel={handleCancelTest}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-100" data-theme={theme}>
      <div className="navbar bg-base-200 shadow-lg">
        <div className="flex-1">
          <span className="text-xl font-bold px-4">SAT Practice Tracker</span>
        </div>
        <div className="flex-none flex gap-2">
          <button
            className="btn btn-ghost btn-sm"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            )}
          </button>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setSettingsOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>
          {results.length > 0 && (
            <button className="btn btn-ghost btn-sm text-error" onClick={handleClearAll}>
              Clear All
            </button>
          )}
        </div>
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
            className={`tab ${activeTab === 'analysis' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('analysis')}
          >
            Analysis
          </button>
          <button
            role="tab"
            className={`tab ${activeTab === 'generate' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('generate')}
          >
            Generate
          </button>
          <button
            role="tab"
            className={`tab ${activeTab === 'practice' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('practice')}
          >
            Practice ({results.filter(r => r.generated).length})
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
            className={`tab ${activeTab === 'history' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            History ({results.filter(r => !r.generated).length})
          </button>
        </div>

        {activeTab === 'dashboard' && <Dashboard results={results} />}

        {activeTab === 'analysis' && <Analysis results={results} />}

        {activeTab === 'generate' && (
          <Generate
            results={results}
            onTestGenerated={handleTestGenerated}
            onOpenSettings={() => setSettingsOpen(true)}
          />
        )}

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

        {activeTab === 'practice' && (
          <div className="space-y-4">
            {results.filter(r => r.generated).length === 0 ? (
              <div className="alert">
                <span>No practice tests yet. Go to Generate to create one!</span>
              </div>
            ) : (
              results
                .filter(r => r.generated)
                .sort((a, b) => new Date(b.uploadedAt || b.date) - new Date(a.uploadedAt || a.date))
                .map(result => (
                  <div key={result.id}>
                    {!result.taken ? (
                      <div className="card bg-base-200 shadow-md">
                        <div className="card-body">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="card-title">{result.name}</h3>
                              <p className="text-sm text-base-content/60">
                                {new Date(result.uploadedAt).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </p>
                              <p className="text-sm mt-2">
                                {result.data.reduce((sum, s) => sum + (s.items?.length || 0), 0)} questions
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <div className="badge badge-primary">New</div>
                              <div className={`badge ${result.generationType === 'ai' ? 'badge-secondary' : 'badge-accent'}`}>
                                {result.generationType === 'ai' ? 'AI Generated' : 'Review'}
                              </div>
                            </div>
                          </div>
                          <div className="card-actions justify-end mt-4">
                            <button
                              className="btn btn-ghost btn-sm text-error"
                              onClick={() => handleDelete(result.id)}
                            >
                              Delete
                            </button>
                            <button
                              className="btn btn-primary"
                              onClick={() => handleTakeTest(result)}
                            >
                              Take Test
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <TestResults
                        result={result}
                        onDelete={handleDelete}
                        onRetake={handleRetakeTest}
                      />
                    )}
                  </div>
                ))
            )}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => loadSampleData(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                Reload Sample Data
              </button>
            </div>
            {results.filter(r => !r.generated).length === 0 ? (
              <div className="alert">
                <span>No uploaded tests yet. Go to Upload to add your test results!</span>
              </div>
            ) : (
              results
                .filter(r => !r.generated)
                .sort((a, b) => new Date(b.uploadedAt || b.date) - new Date(a.uploadedAt || a.date))
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

      <Settings isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  )
}

export default App
