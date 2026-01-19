import { useState, useEffect } from 'react'
import { signIn, signUp, getCurrentUser, onAuthStateChange } from '../services/supabase'

export default function Auth({ onAuthSuccess }) {
  const [mode, setMode] = useState('signin') // 'signin' or 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check if already authenticated
    getCurrentUser().then(u => {
      if (u) {
        setUser(u)
        if (onAuthSuccess) onAuthSuccess(u)
      }
    })

    // Listen for auth changes
    const { data: { subscription } } = onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user)
        if (onAuthSuccess) onAuthSuccess(session.user)
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [onAuthSuccess])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      if (mode === 'signup') {
        const { user: newUser } = await signUp(email, password)
        setMessage('Account created! Please check your email to verify your account.')
        // Note: Supabase requires email confirmation by default
        // You can disable this in Supabase dashboard if you want immediate access
      } else {
        const { user: signedInUser } = await signIn(email, password)
        setUser(signedInUser)
        if (onAuthSuccess) onAuthSuccess(signedInUser)
      }
    } catch (err) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // If already authenticated, show user info
  if (user) {
    return (
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Signed In</h2>
          <p className="text-sm text-base-content/70">
            {user.email}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="card bg-base-200 shadow-md max-w-md mx-auto">
      <div className="card-body">
        <h2 className="card-title">
          {mode === 'signup' ? 'Create Account' : 'Sign In'}
        </h2>
        <p className="text-sm text-base-content/60 mb-4">
          {mode === 'signup' 
            ? 'Create an account to generate and take practice tests'
            : 'Sign in to access your tests and results'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              disabled={loading}
            />
            {mode === 'signup' && (
              <label className="label">
                <span className="label-text-alt">Minimum 6 characters</span>
              </label>
            )}
          </div>

          {error && (
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          )}

          {message && (
            <div className="alert alert-info">
              <span>{message}</span>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                {mode === 'signup' ? 'Creating...' : 'Signing in...'}
              </>
            ) : (
              mode === 'signup' ? 'Create Account' : 'Sign In'
            )}
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          className="btn btn-ghost w-full"
          onClick={() => {
            setMode(mode === 'signin' ? 'signup' : 'signin')
            setError(null)
            setMessage(null)
          }}
          disabled={loading}
        >
          {mode === 'signin' 
            ? "Don't have an account? Sign up"
            : 'Already have an account? Sign in'}
        </button>
      </div>
    </div>
  )
}
