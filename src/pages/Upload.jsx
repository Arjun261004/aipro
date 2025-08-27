import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Upload() {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleUpload = async () => {
    if (!file) return
    
    setIsUploading(true)
    setUploadProgress(0)
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval)
          return 90
        }
        return prev + 10
      })
    }, 200)
    
    // Simulate upload delay
    setTimeout(() => {
      clearInterval(interval)
      setUploadProgress(100)
      setTimeout(() => {
        setIsUploading(false)
        // Navigate to study page with file data
        navigate('/study', { state: { fileName: file.name } })
      }, 500)
    }, 2000)
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '48px', lineHeight: '1.1', marginBottom: '16px' }}>Upload Your Document</h1>
            <p className="muted" style={{ fontSize: '18px', marginBottom: '48px' }}>
              Select a PDF or PPT file to start analyzing with AI
            </p>
            
            <div className="card" style={{ padding: '48px 32px', textAlign: 'center', position: 'relative' }}>
              {!file ? (
                <div>
                  <div style={{ 
                    width: '120px', 
                    height: '120px', 
                    border: '3px dashed #e5e7eb', 
                    borderRadius: '50%', 
                    margin: '0 auto 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-muted)' }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>Choose a file</h3>
                  <p className="muted" style={{ marginBottom: '32px', fontSize: '16px' }}>
                    PDF or PPT files only • Max 50MB
                  </p>
                  <button className="btn" onClick={() => inputRef.current?.click()} style={{ fontSize: '16px', padding: '16px 32px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 16V8M12 8l-3 3M12 8l3 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 16v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                    Select File
                  </button>
                  <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--color-muted)' }}>
                    or drag and drop your file here
                  </p>
                </div>
              ) : (
                <div>
                  {isUploading ? (
                    <div>
                      <div style={{ 
                        width: '120px', 
                        height: '120px', 
                        margin: '0 auto 32px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite', color: 'var(--color-accent)' }}>
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="31.416" strokeDashoffset="31.416" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <h3 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>Processing your document...</h3>
                      <p className="muted" style={{ marginBottom: '24px', fontSize: '16px' }}>
                        Our AI is analyzing your content
                      </p>
                      
                      {/* Progress bar */}
                      <div style={{ 
                        width: '100%', 
                        height: '8px', 
                        background: '#e5e7eb', 
                        borderRadius: '4px', 
                        overflow: 'hidden',
                        marginBottom: '16px'
                      }}>
                        <div style={{ 
                          width: `${uploadProgress}%`, 
                          height: '100%', 
                          background: 'var(--color-accent)', 
                          transition: 'width 0.3s ease',
                          borderRadius: '4px'
                        }} />
                      </div>
                      <p style={{ fontSize: '14px', color: 'var(--color-muted)' }}>
                        {uploadProgress}% complete
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div style={{ 
                        width: '120px', 
                        height: '120px', 
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        borderRadius: '50%', 
                        margin: '0 auto 32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: '600' }}>File Ready!</h3>
                      <div style={{ 
                        background: '#f3f4f6', 
                        padding: '16px', 
                        borderRadius: '12px', 
                        marginBottom: '24px',
                        textAlign: 'left'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-accent)' }}>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                            <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span style={{ fontWeight: '600' }}>{file.name}</span>
                        </div>
                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-muted)' }}>
                          {formatFileSize(file.size)} • {file.type || 'Document'}
                        </p>
                      </div>
                      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button 
                          className="btn" 
                          onClick={handleUpload}
                          style={{ fontSize: '16px', padding: '16px 32px', minWidth: '160px' }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M12 2v6m0 0l-3-3m3 3l3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 22v-6m0 0l3 3m-3-3l-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Start Analysis
                        </button>
                        <button 
                          className="btn secondary" 
                          onClick={() => setFile(null)}
                          style={{ fontSize: '16px', padding: '16px 32px', minWidth: '160px' }}
                        >
                          Choose Different File
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <input
                ref={inputRef}
                type="file"
                accept=".pdf,.ppt,.pptx,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
                style={{ display: 'none' }}
                onChange={handleFileSelect}
              />
            </div>

            {/* File type info */}
            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--color-muted)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                </svg>
                PDF Files
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--color-muted)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                </svg>
                PowerPoint Files
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--color-muted)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Secure Upload
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
