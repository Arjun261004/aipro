import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function ViewFiles() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  
  // Mock data for user files
  const userFiles = [
    {
      id: 1,
      title: 'Machine Learning Notes',
      date: '15.09.2025',
      type: 'PDF',
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      date: '12.09.2025',
      type: 'PDF',
      size: '1.8 MB'
    },
    {
      id: 3,
      title: 'AWS Cloud Architecture',
      date: '10.09.2025',
      type: 'PPT',
      size: '3.2 MB'
    },
    {
      id: 4,
      title: 'React Development Guide',
      date: '08.09.2025',
      type: 'PDF',
      size: '2.1 MB'
    },
    {
      id: 5,
      title: 'Database Design Patterns',
      date: '05.09.2025',
      type: 'PDF',
      size: '1.5 MB'
    },
    {
      id: 6,
      title: 'DevOps Best Practices',
      date: '03.09.2025',
      type: 'PPT',
      size: '2.8 MB'
    }
  ]

  const filteredFiles = userFiles.filter(file =>
    file.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleFileClick = (file) => {
    navigate('/study', { state: { fileName: file.title, isExistingFile: true } })
  }

  const handleNewFile = () => {
    navigate('/upload')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Navbar />
      
      {/* Main Content */}
      <div style={{ padding: '32px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: '700', 
            margin: '0 0 8px 0', 
            color: 'var(--color-text)',
            letterSpacing: '-0.02em'
          }}>
            My Files
          </h1>
          <p style={{ 
            margin: 0, 
            color: 'var(--color-muted)', 
            fontSize: '18px',
            marginBottom: '32px'
          }}>
            {filteredFiles.length} documents • {userFiles.length} total
          </p>
          
          {/* Search Bar */}
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            justifyContent: 'center',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="text"
              placeholder="Search your files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                padding: '14px 20px',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                background: '#fff'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
            <button
              style={{
                padding: '14px 24px',
                background: 'var(--color-accent)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 12px rgba(15, 76, 129, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* Files Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '24px',
          marginBottom: '40px'
        }}>
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              onClick={() => handleFileClick(file)}
              style={{
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                border: '1px solid #e5e7eb'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)'
                e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* File Header */}
              <div style={{
                height: '80px',
                background: 'var(--color-accent)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: 'var(--color-text)',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {file.date}
                </div>
                                 <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                   <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                   <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                   <line x1="12" y1="13" x2="12" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                 </svg>
              </div>
              
              {/* File Info */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ 
                  margin: '0 0 12px 0', 
                  fontSize: '18px', 
                  fontWeight: '600', 
                  color: 'var(--color-text)',
                  lineHeight: '1.3'
                }}>
                  {file.title}
                </h3>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  fontSize: '14px',
                  color: 'var(--color-muted)'
                }}>
                  <span style={{ 
                    background: 'var(--color-accent)', 
                    color: '#fff', 
                    padding: '4px 10px', 
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {file.type}
                  </span>
                  <span>{file.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFiles.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '80px 20px',
            color: 'var(--color-muted)'
          }}>
                         <svg width="72" height="72" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '20px', opacity: 0.6, color: 'var(--color-accent)' }}>
               <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
               <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
               <line x1="12" y1="13" x2="12" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
               <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
             </svg>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: '600' }}>
              No files found
            </h3>
            <p style={{ margin: 0, fontSize: '16px' }}>
              Try adjusting your search terms or upload a new document.
            </p>
          </div>
        )}

        {/* Upload New File Section */}
        {filteredFiles.length > 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px 20px',
            background: '#fff',
            borderRadius: '16px',
            border: '2px dashed #e5e7eb',
            marginTop: '40px'
          }}>
                         <svg width="56" height="56" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>
               <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
               <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
               <line x1="12" y1="13" x2="12" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
               <path d="M12 8V4M12 4l-2 2M12 4l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '600', color: 'var(--color-text)' }}>
              Upload New Document
            </h3>
            <p style={{ margin: '0 0 20px 0', fontSize: '16px', color: 'var(--color-muted)' }}>
              Add more documents to your collection
            </p>
            <button
              onClick={handleNewFile}
              style={{
                padding: '12px 24px',
                background: 'var(--color-accent)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 12px rgba(15, 76, 129, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              Upload New File
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
