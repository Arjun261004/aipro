import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Calendar = () => {
  const navigate = useNavigate();
  const [currentDate] = useState(new Date());

  // Mock data for files with upload dates
  const fileEvents = [
    { id: 1, title: 'Machine Learning Notes', date: '2025-01-15', type: 'PDF' },
    { id: 2, title: 'Business Strategy PPT', date: '2025-01-18', type: 'PPT' },
    { id: 3, title: 'Research Paper', date: '2025-01-20', type: 'PDF' },
    { id: 4, title: 'Project Proposal', date: '2025-01-22', type: 'PDF' },
    { id: 5, title: 'Team Meeting Notes', date: '2025-01-25', type: 'PDF' },
    { id: 6, title: 'Financial Report', date: '2025-01-28', type: 'PDF' },
  ];

  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getMonth();

  // Get days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: '', isEmpty: true });
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const events = fileEvents.filter(event => event.date === dateString);
      days.push({ day, events, isEmpty: false });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getDayHeaderStyle = (dayIndex) => {
    return {
      background: 'var(--color-accent)',
      color: 'white',
      padding: '12px 8px',
      borderRadius: '8px 8px 0 0',
      fontSize: '14px',
      fontWeight: '600',
      textAlign: 'center',
      textShadow: '0 1px 2px rgba(0,0,0,0.1)'
    };
  };

  const getEventStyle = (eventType) => {
    return {
      background: '#f8f9fa',
      color: 'var(--color-accent)',
      border: 'var(--color-accent)'
    };
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      <Navbar />
      
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Section */}
        <div style={{ 
          background: 'var(--color-accent)',
          padding: '24px',
          borderRadius: '16px',
          marginBottom: '32px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            margin: '0 0 8px 0', 
            fontSize: '32px', 
            fontWeight: '700',
            fontFamily: 'Georgia, serif'
          }}>
            File Calendar
          </h1>
          <p style={{ 
            margin: '0', 
            fontSize: '18px', 
            opacity: 0.9,
            fontFamily: 'Georgia, serif'
          }}>
            Track your document uploads and stay organized
          </p>
        </div>

        {/* Calendar Grid */}
        <div style={{ 
          background: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          overflow: 'hidden'
        }}>
          {/* Week Day Headers */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '1px',
            marginBottom: '1px'
          }}>
            {weekDays.map((day, index) => (
              <div key={day} style={getDayHeaderStyle(index)}>
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '1px',
            background: '#e0e0e0'
          }}>
            {calendarDays.map((dayData, index) => (
              <div
                key={index}
                style={{
                  background: dayData.isEmpty ? '#f5f5f5' : 'white',
                  minHeight: '120px',
                  padding: '12px 8px',
                  position: 'relative',
                  border: 'none'
                }}
              >
                {!dayData.isEmpty && (
                  <>
                    {/* Day Number */}
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {String(dayData.day).padStart(2, '0')}
                    </div>

                    {/* Events */}
                    <div style={{ marginTop: '32px' }}>
                      {dayData.events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          style={{
                            ...getEventStyle(event.type),
                            padding: '6px 8px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '500',
                            marginBottom: '4px',
                            border: `1px solid ${getEventStyle(event.type).border}`,
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-1px)';
                            e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                          }}
                          onClick={() => navigate('/study')}
                        >
                          {event.title}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div style={{ 
          marginTop: '24px',
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ 
              width: '16px', 
              height: '16px', 
              background: '#f8f9fa', 
              borderRadius: '4px',
              border: '1px solid var(--color-accent)'
            }}></div>
            <span style={{ fontSize: '14px', color: '#666' }}>All File Types</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ 
          marginTop: '32px',
          textAlign: 'center'
        }}>
          <button
            onClick={() => navigate('/upload')}
            style={{
              padding: '16px 32px',
              background: 'var(--color-accent)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              marginRight: '16px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(15, 76, 129, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Upload New Document
          </button>
          <button
            onClick={() => navigate('/files')}
            style={{
              padding: '16px 32px',
              background: 'transparent',
              color: 'var(--color-accent)',
              border: '2px solid var(--color-accent)',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--color-accent)';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--color-accent)';
            }}
          >
            View All Files
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
