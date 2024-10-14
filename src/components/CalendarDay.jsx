// src/components/CalendarDay.jsx
import React from 'react';

const CalendarDay = ({ day, event, onClick }) => {
  return (
    <div className="calendar-day" onClick={onClick}>
      {day}
      {event && <div className="event-tag">Event</div>}
    </div>
  );
};

export default CalendarDay;
