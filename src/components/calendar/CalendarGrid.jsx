// src/components/calendar/CalendarGrid.jsx
import React from 'react';
import CalendarDay from '../CalendarDay';

const CalendarGrid = ({ daysInMonth, events, currentYear, currentMonth, onDayClick }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="calendar-container">
      {/* 曜日の表示 */}
      <div className="calendar-days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-day-of-week">
            {day}
          </div>
        ))}
      </div>

      {/* 日付の表示 */}
      <div className="calendar-grid">
        {[...Array(daysInMonth)].map((_, i) => (
          <CalendarDay
            key={i + 1}
            day={i + 1}
            event={events[`${currentYear}-${currentMonth}-${i + 1}`] || ''}
            onClick={() => onDayClick(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
