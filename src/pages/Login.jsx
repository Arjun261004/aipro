import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Navigate to home page after successful login
      navigate('/')
    }, 2000)
  }

  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '32px' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-accent)', marginBottom: '16px' }}>
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="10,17 15,12 10,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="15" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h1 style={{ fontSize: '32px', marginBottom: '8px', fontWeight: '700' }}>Welcome Back</h1>
              <p className="muted" style={{ fontSize: '16px' }}>
                Sign in to your DocAI account
              </p>
            </div>
            
            <div className="card" style={{ padding: '32px' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '16px',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    placeholder="Enter your email"
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '16px',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    placeholder="Enter your password"
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      style={{ width: '16px', height: '16px' }}
                    />
                    Remember me
                  </label>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--color-accent)', textDecoration: 'none' }}>
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn"
                  disabled={isLoading}
                  style={{ width: '100%', fontSize: '16px', padding: '14px 20px' }}
                >
                  {isLoading ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="31.416" strokeDashoffset="31.416" strokeLinecap="round"/>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>
                  Don't have an account?{' '}
                  <Link to="/signup" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: '600' }}>
                    Sign up
                  </Link>
                </p>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button className="btn secondary" style={{ fontSize: '14px', padding: '10px 16px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
