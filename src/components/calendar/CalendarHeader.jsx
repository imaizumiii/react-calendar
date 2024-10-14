// src/components/calendar/CalendarHeader.jsx
import React from 'react';

const CalendarHeader = ({ currentYear, currentMonth, months, onNextMonth, onPrevMonth }) => {
  return (
    <div className="calendar-header">
      <button onClick={onPrevMonth}>Previous</button>
      <h2>{months[currentMonth]} {currentYear}</h2>
      <button onClick={onNextMonth}>Next</button>
    </div>
  );
};

export default CalendarHeader;
