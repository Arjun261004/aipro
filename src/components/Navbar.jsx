import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      // If we're on the homepage, scroll to the section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      // If we're on another page, navigate to homepage and then scroll
      navigate('/')
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    }
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="brand" aria-label="DocAI" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M7 8h10M7 12h6M7 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          DocAI
        </div>
        <nav className="nav" aria-label="Primary">
          <button 
            className="nav-link-btn" 
            onClick={() => scrollToSection('features')}
          >
            Features
          </button>
          <button 
            className="nav-link-btn" 
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className="nav-link-btn" 
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
          <button 
            className="nav-link-btn" 
            onClick={() => navigate('/calendar')}
            style={{
              padding: '8px 16px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
              <line x1="8" y1="14" x2="8" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="14" x2="12" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="8" y1="18" x2="8" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="nav-auth-buttons">
            <button
              className="nav-login-btn"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              className="nav-signup-btn"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
