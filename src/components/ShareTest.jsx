import { useState, useEffect } from 'react'
import { Share2, Copy, Check } from 'lucide-react'
import { updateTest } from '../services/supabase'

export default function ShareTest({ test, onUpdate }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isPublic, setIsPublic] = useState(test.is_public || false)
  const [sharedEmails, setSharedEmails] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [shareLink, setShareLink] = useState(null)
  const [copied, setCopied] = useState(false)

  // Sync isPublic with test prop
  useEffect(() => {
    setIsPublic(test.is_public || false)
  }, [test.is_public])

  // Generate link when modal opens if test is public
  useEffect(() => {
    if (isOpen && isPublic && test.id) {
      const link = `${window.location.origin}/test/${test.id}`
      setShareLink(link)
    } else if (isOpen && !isPublic) {
      // Clear link if test is not public
      setShareLink(null)
    }
  }, [isOpen, isPublic, test.id])

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
      
      // Generate shareable link
      const link = `${window.location.origin}/test/${test.id}`
      setShareLink(link)
      
      if (onUpdate) {
        onUpdate()
      }
      
      // Don't auto-close if there's a share link to show
      if (!isPublic) {
        setTimeout(() => {
          setIsOpen(false)
          setMessage(null)
          setShareLink(null)
        }, 1500)
      }
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
        <Share2 className="w-4 h-4" />
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

          {shareLink && isPublic && (
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Shareable Link</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={shareLink}
                  className="input input-bordered flex-1 font-mono text-sm"
                  onClick={(e) => e.target.select()}
                />
                <button
                  className="btn btn-primary"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(shareLink)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2000)
                    } catch (err) {
                      // Fallback for older browsers
                      const input = document.createElement('input')
                      input.value = shareLink
                      document.body.appendChild(input)
                      input.select()
                      document.execCommand('copy')
                      document.body.removeChild(input)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2000)
                    }
                  }}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="label">
                <span className="label-text-alt text-base-content/60">
                  Anyone with this link can view and take this test (if they're signed in)
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="modal-action">
          <button 
            className="btn btn-ghost" 
            onClick={() => {
              setIsOpen(false)
              // Only clear link if test is not public (it will be regenerated on next open if public)
              if (!isPublic) {
                setShareLink(null)
              }
              setCopied(false)
            }}
          >
            {shareLink ? 'Close' : 'Cancel'}
          </button>
          {!shareLink && (
            <button className="btn btn-primary" onClick={handleSave} disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : 'Save'}
            </button>
          )}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => {
          setIsOpen(false)
          // Only clear link if test is not public
          if (!isPublic) {
            setShareLink(null)
          }
          setCopied(false)
        }}>close</button>
      </form>
    </dialog>
  )
}
