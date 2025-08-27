import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Hero({ onStartStudying, onViewFiles }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px' }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-accent)', marginBottom: '24px' }}>
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 8h10M7 12h6M7 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 2v6m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 style={{ fontSize: '56px', lineHeight: '1.1', marginBottom: '24px', background: 'linear-gradient(135deg, var(--color-text) 0%, var(--color-accent) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Turn Your Documents Into Insights
          </h1>
          <p className="muted" style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Upload a PDF or PPT and let AI summarize, generate questions, suggest videos, and more. 
            Transform your study materials into powerful learning tools.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn" onClick={onStartStudying} style={{ fontSize: '18px', padding: '18px 32px', minWidth: '200px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 16V8M12 8l-3 3M12 8l3 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 16v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              Start Studying Now
            </button>
            <button 
              className="btn secondary" 
              onClick={onViewFiles} 
              style={{ fontSize: '18px', padding: '18px 32px', minWidth: '200px' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
              </svg>
              View My Files
            </button>
          </div>
          <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--color-muted)' }}>
            Free • No registration required • Supports PDF & PowerPoint
          </p>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    { 
      title: 'Summarize PDFs', 
      desc: 'Get concise, high-quality summaries of long documents with key insights highlighted.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          {/* Main document outline with rounded corners */}
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Folded corner effect */}
          <polyline points="14,2 14,8 20,8" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Text lines representing content */}
          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="16" y1="21" x2="10" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Vertical line connecting text lines */}
          <line x1="12" y1="13" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Small decorative elements */}
          <circle cx="9" cy="9" r="1" fill="currentColor" opacity="0.6"/>
          <circle cx="11" cy="9" r="1" fill="currentColor" opacity="0.6"/>
          <circle cx="13" cy="9" r="1" fill="currentColor" opacity="0.6"/>
        </svg>
      ),
      badge: 'Core Feature'
    },
    { 
      title: 'Generate Questions', 
      desc: 'Create study questions or interview prompts instantly to test your understanding.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          {/* Main circle outline */}
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Question mark dot */}
          <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
          
          {/* Question mark curve */}
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Question mark bottom dot */}
          <circle cx="12" cy="17" r="1" fill="currentColor"/>
          
          {/* Decorative elements */}
          <circle cx="8" cy="6" r="0.5" fill="currentColor" opacity="0.4"/>
          <circle cx="16" cy="6" r="0.5" fill="currentColor" opacity="0.4"/>
        </svg>
      ),
      badge: 'Study Tool'
    },
    { 
      title: 'Suggest YouTube Videos', 
      desc: 'Discover relevant videos to deepen understanding and explore related topics.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          {/* Video container outline */}
          <rect x="3" y="5" width="18" height="14" rx="2" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Play button triangle */}
          <polygon points="8,9 8,15 15,12 8,9" 
                    fill="currentColor" stroke="currentColor" strokeWidth="1"/>
          
          {/* Decorative elements */}
          <circle cx="7" cy="7" r="0.5" fill="currentColor" opacity="0.3"/>
          <circle cx="17" cy="7" r="0.5" fill="currentColor" opacity="0.3"/>
          <circle cx="7" cy="17" r="0.5" fill="currentColor" opacity="0.3"/>
          <circle cx="17" cy="17" r="0.5" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      badge: 'Learning Aid'
    },
    { 
      title: 'Other AI Insights', 
      desc: 'Extract key points, action items, and generate comprehensive study materials.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          {/* Central brain/insight symbol */}
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Neural network connections */}
          <path d="M12 4v4M12 16v4M4 12h4M16 12h4" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Connection dots */}
          <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
          <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
          <circle cx="8" cy="12" r="1.5" fill="currentColor"/>
          <circle cx="16" cy="12" r="1.5" fill="currentColor"/>
          
          {/* Central insight element */}
          <path d="M9 12l2 2 4-4" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Decorative elements */}
          <circle cx="6" cy="6" r="0.5" fill="currentColor" opacity="0.4"/>
          <circle cx="18" cy="6" r="0.5" fill="currentColor" opacity="0.4"/>
          <circle cx="6" cy="18" r="0.5" fill="currentColor" opacity="0.4"/>
          <circle cx="18" cy="18" r="0.5" fill="currentColor" opacity="0.4"/>
        </svg>
      ),
      badge: 'Advanced'
    },
  ]
  return (
    <section id="features" className="features" style={{ background: '#fafafa', padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: 'var(--color-accent)', 
            color: 'white', 
            padding: '8px 16px', 
            borderRadius: '20px', 
            fontSize: '14px', 
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            AI-Powered Tools
          </div>
          <h2 style={{ 
            fontSize: '48px', 
            marginBottom: '20px', 
            fontWeight: '800',
            background: 'linear-gradient(135deg, var(--color-text) 0%, var(--color-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Powerful AI Features</h2>
          <p className="muted" style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Everything you need to transform your documents into comprehensive study materials
          </p>
        </div>
        <div className="features-grid">
          {items.map((f) => (
            <div key={f.title} className="card feature-card" style={{ 
              padding: '0', 
              textAlign: 'left', 
              transition: 'all 0.3s ease', 
              border: 'none',
              position: 'relative',
              overflow: 'hidden',
              background: 'white',
              borderRadius: '20px'
            }}>
              {/* Top accent bar */}
              <div style={{ 
                position: 'absolute', 
                top: '0', 
                left: '0', 
                right: '0', 
                height: '6px', 
                background: 'var(--color-accent)',
                transform: 'scaleX(0)',
                transition: 'transform 0.3s ease'
              }}></div>
              
              {/* Badge positioned at top-right */}
              <div style={{ 
                position: 'absolute', 
                top: '20px', 
                right: '20px',
                zIndex: 2
              }}>
                <span style={{
                  background: 'rgba(15, 76, 129, 0.1)',
                  color: 'var(--color-accent)',
                  padding: '6px 14px',
                  borderRadius: '16px',
                  fontSize: '11px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  border: '1px solid rgba(15, 76, 129, 0.2)'
                }}>
                  {f.badge}
                </span>
              </div>
              
              {/* Main content padding */}
              <div style={{ padding: '32px 28px 28px 28px' }}>
                {/* Icon container with better positioning */}
                <div style={{ 
                  color: 'var(--color-accent)', 
                  background: 'rgba(15, 76, 129, 0.05)',
                  width: '72px',
                  height: '72px',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  border: '1px solid rgba(15, 76, 129, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  {f.icon}
                </div>
                
                {/* Title with better typography */}
                <h3 style={{ 
                  margin: '0 0 16px 0', 
                  fontSize: '24px', 
                  fontWeight: '800', 
                  color: 'var(--color-text)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}>
                  {f.title}
                </h3>
                
                {/* Description with improved readability */}
                <p className="muted" style={{ 
                  margin: 0, 
                  lineHeight: '1.6', 
                  fontSize: '16px',
                  color: 'var(--color-muted)',
                  fontWeight: '400'
                }}>
                  {f.desc}
                </p>
              </div>
              
              {/* Bottom action indicator */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '3px',
                background: 'linear-gradient(90deg, var(--color-accent) 0%, rgba(15, 76, 129, 0.3) 100%)',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span>© {new Date().getFullYear()} DocAI</span>
        <span className="muted">
          <a href="#contact">Contact</a> ·
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ marginLeft: 8 }}>Twitter</a> ·
          <a href="https://github.com" target="_blank" rel="noreferrer" style={{ marginLeft: 8 }}>GitHub</a>
        </span>
      </div>
    </footer>
  )
}

export default function Home() {
  const navigate = useNavigate()

  const handleStartStudying = () => {
    navigate('/upload')
  }

  const handleViewFiles = () => {
    navigate('/files')
  }

  return (
    <div>
      <Navbar />
      <Hero onStartStudying={handleStartStudying} onViewFiles={handleViewFiles} />
      <Features />
      <section id="about" style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'rgba(15, 76, 129, 0.1)', 
              color: 'var(--color-accent)', 
              padding: '8px 16px', 
              borderRadius: '20px', 
              fontSize: '14px', 
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Trusted Platform
            </div>
            <h3 style={{ 
              marginTop: 0, 
              fontSize: '48px', 
              marginBottom: '20px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, var(--color-text) 0%, var(--color-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>About DocAI</h3>
            <p className="muted" style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '700px', margin: '0 auto' }}>
              DocAI helps you turn documents into insights with clean, modern AI tooling. 
              Our advanced algorithms analyze your content and provide comprehensive study materials.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px',
            marginBottom: '48px'
          }}>
            <div style={{ 
              background: 'rgba(15, 76, 129, 0.02)', 
              padding: '32px', 
              borderRadius: '16px', 
              border: '1px solid rgba(15, 76, 129, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                background: 'var(--color-accent)', 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 11l-3-3m0 0l3-3m-3 3h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '700', color: 'var(--color-text)' }}>Secure & Private</h4>
              <p style={{ margin: 0, color: 'var(--color-muted)', lineHeight: '1.6' }}>
                Your documents are processed securely with enterprise-grade encryption and privacy protection.
              </p>
            </div>
            
            <div style={{ 
              background: 'rgba(15, 76, 129, 0.02)', 
              padding: '32px', 
              borderRadius: '16px', 
              border: '1px solid rgba(15, 76, 129, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                background: 'var(--color-accent)', 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '700', color: 'var(--color-text)' }}>Instant Results</h4>
              <p style={{ margin: 0, color: 'var(--color-muted)', lineHeight: '1.6' }}>
                Get AI-powered insights in seconds, not hours. Our optimized algorithms deliver fast, accurate results.
              </p>
            </div>
            
            <div style={{ 
              background: 'rgba(15, 76, 129, 0.02)', 
              padding: '32px', 
              borderRadius: '16px', 
              border: '1px solid rgba(15, 76, 129, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                background: 'var(--color-accent)', 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '700', color: 'var(--color-text)' }}>No Registration</h4>
              <p style={{ margin: 0, color: 'var(--color-muted)', lineHeight: '1.6' }}>
                Start using DocAI immediately without creating accounts or providing personal information.
              </p>
            </div>
          </div>
          
          <div style={{ 
            background: 'linear-gradient(135deg, var(--color-accent) 0%, #1e40af 100%)', 
            padding: '40px', 
            borderRadius: '20px', 
            textAlign: 'center',
            color: 'white'
          }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: '700' }}>
              Join thousands of students and professionals
            </h4>
            <p style={{ margin: '0 0 24px 0', fontSize: '18px', opacity: 0.9 }}>
              Transform your learning experience with AI-powered document analysis
            </p>
            <button className="btn" onClick={handleStartStudying} style={{ 
              background: 'white', 
              color: 'var(--color-accent)', 
              fontSize: '16px', 
              padding: '14px 28px',
              border: 'none'
            }}>
              Get Started Free
            </button>
          </div>
        </div>
      </section>
      <section id="contact" style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'rgba(15, 76, 129, 0.1)', 
              color: 'var(--color-accent)', 
              padding: '8px 16px', 
              borderRadius: '20px', 
              fontSize: '14px', 
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Contact Us
            </div>
            <h3 style={{ 
              marginTop: 0, 
              fontSize: '48px', 
              marginBottom: '20px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, var(--color-text) 0%, var(--color-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Get in Touch</h3>
            <p className="muted" style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '700px', margin: '0 auto' }}>
              Have questions or suggestions? We'd love to hear from you and help improve your experience.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px',
            marginBottom: '48px'
          }}>
            <div style={{ 
              background: 'white', 
              padding: '32px', 
              borderRadius: '16px', 
              border: '1px solid rgba(15, 76, 129, 0.1)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ 
                background: 'var(--color-accent)', 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '700', color: 'var(--color-text)' }}>Email Support</h4>
              <p style={{ margin: '0 0 20px 0', color: 'var(--color-muted)', lineHeight: '1.6' }}>
                Get in touch with our support team for any questions or assistance.
              </p>
              <a href="mailto:contact@docai.app" style={{ 
                color: 'var(--color-accent)', 
                textDecoration: 'none', 
                fontWeight: '600',
                fontSize: '16px'
              }}>
                contact@docai.app
              </a>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '32px', 
              borderRadius: '16px', 
              border: '1px solid rgba(15, 76, 129, 0.1)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ 
                background: 'var(--color-accent)', 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '700', color: 'var(--color-text)' }}>Feature Requests</h4>
              <p style={{ margin: '0 0 20px 0', color: 'var(--color-muted)', lineHeight: '1.6' }}>
                Suggest new features or improvements to help us enhance DocAI.
              </p>
              <a href="mailto:features@docai.app" style={{ 
                color: 'var(--color-accent)', 
                textDecoration: 'none', 
                fontWeight: '600',
                fontSize: '16px'
              }}>
                features@docai.app
              </a>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '32px', 
              borderRadius: '16px', 
              border: '1px solid rgba(15, 76, 129, 0.1)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ 
                background: 'var(--color-accent)', 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" stroke="currentColor" strokeWidth="2" fill="round"/>
                </svg>
              </div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '700', color: 'var(--color-text)' }}>Bug Reports</h4>
              <p style={{ margin: '0 0 20px 0', color: 'var(--color-muted)', lineHeight: '1.6' }}>
                Report any issues or bugs you encounter while using DocAI.
              </p>
              <a href="mailto:support@docai.app" style={{ 
                color: 'var(--color-accent)', 
                textDecoration: 'none', 
                fontWeight: '600',
                fontSize: '16px'
              }}>
                support@docai.app
              </a>
            </div>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '20px', 
            textAlign: 'center',
            border: '1px solid rgba(15, 76, 129, 0.1)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: '700', color: 'var(--color-text)' }}>
              Ready to get started?
            </h4>
            <p style={{ margin: '0 0 24px 0', fontSize: '18px', color: 'var(--color-muted)' }}>
              Upload your first document and experience the power of AI-driven document analysis
            </p>
            <button className="btn" onClick={handleStartStudying} style={{ 
              fontSize: '16px', 
              padding: '14px 28px'
            }}>
              Start Analyzing Documents
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
