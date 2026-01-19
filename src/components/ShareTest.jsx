import { useState } from 'react'
import { updateTest } from '../services/supabase'

export default function ShareTest({ test, onUpdate }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isPublic, setIsPublic] = useState(test.is_public || false)
  const [sharedEmails, setSharedEmails] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  const handleSave = async () => {
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      // Parse email list (comma or newline separated)
      const emails = sharedEmails
        .split(/[,\n]/)
        .map(e => e.trim())
        .filter(e => e.length > 0)

      // For now, we'll just save is_public
      // TODO: Need to look up user IDs from emails to populate shared_with array
      const updates = {
        is_public: isPublic
        // shared_with: [] // Will implement email-to-user lookup later
      }

      await updateTest(test.id, updates)
      setMessage('Sharing settings updated!')
      
      if (onUpdate) {
        onUpdate()
      }
      
      setTimeout(() => {
        setIsOpen(false)
        setMessage(null)
      }, 1500)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) {
    return (
      <button
        className="btn btn-ghost btn-sm"
        onClick={() => setIsOpen(true)}
        title="Share test"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186a2.25 2.25 0 1 1 0 2.186M6.5 15.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0 0v-1.25m0 0h1.25m-1.25 0h-1.25m13.5 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0 0v-1.25m0 0h-1.25m1.25 0h1.25" />
        </svg>
        Share
      </button>
    )
  }

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Share Test: {test.name}</h3>

        <div className="space-y-4">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Make this test public</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
              />
            </label>
            <div className="label">
              <span className="label-text-alt text-base-content/60">
                Public tests can be seen and taken by anyone signed in
              </span>
            </div>
          </div>

          <div className="divider">OR</div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Share with specific users (by email)</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Enter email addresses, one per line or comma-separated"
              value={sharedEmails}
              onChange={(e) => setSharedEmails(e.target.value)}
              rows={4}
            />
            <div className="label">
              <span className="label-text-alt text-base-content/60">
                Note: Email-based sharing coming soon. For now, use public sharing.
              </span>
            </div>
          </div>

          {error && (
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          )}

          {message && (
            <div className="alert alert-success">
              <span>{message}</span>
            </div>
          )}
        </div>

        <div className="modal-action">
          <button className="btn btn-ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave} disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : 'Save'}
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setIsOpen(false)}>close</button>
      </form>
    </dialog>
  )
}
