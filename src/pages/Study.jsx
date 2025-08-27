import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Study() {
  const location = useLocation()
  const fileName = location.state?.fileName || 'Document'
  const [activeTab, setActiveTab] = useState('summary')

  const mockData = {
    title: "Machine Learning Fundamentals",
    subtitle: "AI-Powered Study Document",
    content: "Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions without being explicitly programmed. It involves algorithms that can identify patterns in data and use those patterns to make predictions or decisions. The field encompasses various approaches including supervised learning, unsupervised learning, and reinforcement learning, each with its own methodologies and applications.",
    summary: "This document covers fundamental concepts in machine learning, including different learning approaches, algorithm roles, and the relationship between AI and ML. Key topics include supervised learning, unsupervised learning, and reinforcement learning methodologies.",
    questions: [
      "What are the main types of machine learning approaches?",
      "How does supervised learning differ from unsupervised learning?",
      "What is the role of algorithms in machine learning?"
    ],
    videos: [
      "Introduction to Machine Learning",
      "Supervised vs Unsupervised Learning", 
      "Machine Learning Algorithms Explained"
    ]
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <Navbar />
      
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 300px', gap: '24px', padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Left Column - AI Study Tools */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="card" style={{ padding: '20px' }}>
            <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              AI Study Tools
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button className="btn" style={{ background: 'var(--color-accent)', color: '#fff' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Generate Questions
              </button>
              
              <button className="btn" style={{ background: 'var(--color-accent)', color: '#fff' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Summarize Document
              </button>
              
              <button className="btn" style={{ background: 'var(--color-accent)', color: '#fff' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Optimize Document
              </button>
            </div>
          </div>

          <div className="card" style={{ padding: '20px', flex: 1 }}>
            <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Generated Questions
            </h3>
            <div style={{ overflowY: 'auto', maxHeight: '300px' }}>
              <ol style={{ paddingLeft: '20px', margin: 0 }}>
                {mockData.questions.map((q, i) => (
                  <li key={i} style={{ marginBottom: '12px', fontSize: '14px' }}>{q}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Center Column - Main Document */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h1 style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: 'bold' }}>{mockData.title}</h1>
            <p style={{ margin: 0, color: 'var(--color-muted)' }}>{mockData.subtitle}</p>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <p style={{ margin: 0, lineHeight: '1.6' }}>{mockData.content}</p>
          </div>

          <div className="card" style={{ padding: '20px' }}>
            <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Document Summary
            </h3>
            <p style={{ margin: 0, lineHeight: '1.6' }}>{mockData.summary}</p>
          </div>
        </div>

        {/* Right Column - Tools */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="card" style={{ padding: '20px' }}>
            <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Study Music
            </h3>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', background: '#e5e7eb', borderRadius: '8px', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <p style={{ margin: '0 0 4px 0', fontWeight: '600' }}>Study Focus</p>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-muted)' }}>AI Assistant</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '6px', transition: 'background 0.2s ease' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <polygon points="19,20 9,12 19,4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '6px', transition: 'background 0.2s ease' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <polygon points="5,4 15,12 5,20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '6px', transition: 'background 0.2s ease' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <polygon points="5,4 15,12 5,20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '20px' }}>
            <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              External Tools
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button className="btn secondary" style={{ justifyContent: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21 5,3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Browse on YouTube
              </button>
              <button className="btn secondary" style={{ justifyContent: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Verify on Wikipedia
              </button>
            </div>
          </div>

          <div className="card" style={{ padding: '20px', flex: 1 }}>
            <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <polygon points="5,3 19,12 5,21 5,3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Recommended Videos
            </h3>
            <div style={{ overflowY: 'auto', maxHeight: '200px' }}>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {mockData.videos.map((video, i) => (
                  <li key={i} style={{ marginBottom: '8px', fontSize: '14px' }}>{video}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
