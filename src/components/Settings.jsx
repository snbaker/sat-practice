import { useState, useEffect } from 'react'
import { getApiKey, saveApiKey, hasApiKey } from '../services/openai'

export default function Settings({ isOpen, onClose }) {
  const [apiKey, setApiKey] = useState('')
  const [saved, setSaved] = useState(false)
  const [showKey, setShowKey] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setApiKey(getApiKey())
      setSaved(false)
    }
  }, [isOpen])

  const handleSave = () => {
    saveApiKey(apiKey)
    setSaved(true)
    setTimeout(() => onClose(), 1000)
  }

  const handleClear = () => {
    setApiKey('')
    saveApiKey('')
    setSaved(true)
  }

  if (!isOpen) return null

  const hasEnvKey = !!import.meta.env.VITE_OPENAI_API_KEY

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Settings</h3>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">OpenAI API Key</span>
            {hasEnvKey && (
              <span className="label-text-alt text-success">Using environment variable</span>
            )}
          </label>

          {hasEnvKey ? (
            <div className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>API key is configured via VITE_OPENAI_API_KEY environment variable</span>
            </div>
          ) : (
            <>
              <div className="join w-full">
                <input
                  type={showKey ? 'text' : 'password'}
                  placeholder="sk-..."
                  className="input input-bordered join-item flex-1"
                  value={apiKey}
                  onChange={(e) => {
                    setApiKey(e.target.value)
                    setSaved(false)
                  }}
                />
                <button
                  className="btn join-item"
                  onClick={() => setShowKey(!showKey)}
                >
                  {showKey ? 'Hide' : 'Show'}
                </button>
              </div>
              <label className="label">
                <span className="label-text-alt text-base-content/60">
                  Your API key is stored locally in your browser
                </span>
              </label>
            </>
          )}
        </div>


        {saved && (
          <div className="alert alert-success mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Settings saved!</span>
          </div>
        )}

        <div className="modal-action">
          {!hasEnvKey && apiKey && (
            <button className="btn btn-ghost text-error btn-sm" onClick={handleClear}>
              Clear OpenAI
            </button>
          )}
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  )
}
