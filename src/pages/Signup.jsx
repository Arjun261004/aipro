import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeToNewsletter: false
  })
  const [isLoading, setIsLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Check password strength
    if (name === 'password') {
      const strength = checkPasswordStrength(value)
      setPasswordStrength(strength)
    }
  }

  const checkPasswordStrength = (password) => {
    if (password.length === 0) return ''
    if (password.length < 8) return 'weak'
    if (password.length < 12) return 'medium'
    return 'strong'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      // Navigate to home page after successful signup
      navigate('/')
    }, 2000)
  }

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 'weak': return '#ef4444'
      case 'medium': return '#f59e0b'
      case 'strong': return '#10b981'
      default: return 'transparent'
    }
  }

  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ marginBottom: '32px' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-accent)', marginBottom: '16px' }}>
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h1 style={{ fontSize: '32px', marginBottom: '8px', fontWeight: '700' }}>Create Account</h1>
              <p className="muted" style={{ fontSize: '16px' }}>
                Join DocAI and start transforming your documents
              </p>
            </div>
            
            <div className="card" style={{ padding: '32px' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                  <div>
                    <label htmlFor="firstName" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
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
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
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
                      placeholder="Last name"
                    />
                  </div>
                </div>

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
                    placeholder="Create a password"
                  />
                  {passwordStrength && (
                    <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ 
                        width: '60px', 
                        height: '4px', 
                        background: '#e5e7eb', 
                        borderRadius: '2px',
                        overflow: 'hidden'
                      }}>
                        <div style={{ 
                          width: passwordStrength === 'weak' ? '33%' : passwordStrength === 'medium' ? '66%' : '100%',
                          height: '100%',
                          background: getPasswordStrengthColor(),
                          transition: 'width 0.3s ease'
                        }} />
                      </div>
                      <span style={{ fontSize: '12px', color: getPasswordStrengthColor(), fontWeight: '600', textTransform: 'capitalize' }}>
                        {passwordStrength}
                      </span>
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
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
                    placeholder="Confirm your password"
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                      style={{ width: '16px', height: '16px', marginTop: '2px' }}
                    />
                    <span>
                      I agree to the{' '}
                      <a href="#" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="subscribeToNewsletter"
                      checked={formData.subscribeToNewsletter}
                      onChange={handleChange}
                      style={{ width: '16px', height: '16px', marginTop: '2px' }}
                    />
                    <span>
                      Subscribe to our newsletter for updates and tips
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn"
                  disabled={isLoading || !formData.agreeToTerms}
                  style={{ width: '100%', fontSize: '16px', padding: '14px 20px' }}
                >
                  {isLoading ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="31.416" strokeDashoffset="31.416" strokeLinecap="round"/>
                      </svg>
                      Creating account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </form>

              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>
                  Already have an account?{' '}
                  <Link to="/login" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: '600' }}>
                    Sign in
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
