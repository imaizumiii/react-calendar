// src/components/EventPopup.jsx
import React from 'react';

const EventPopup = ({
  selectedDate,
  event,
  isEditing,
  setEditingEvent,
  handleEdit,
  handleSave,
  handleDelete // 削除関数
}) => {
  return (
    <div className="event-popup">
      <h3>{selectedDate}</h3>
      {isEditing ? (
        <>
          <textarea
            value={event}
            onChange={(e) => setEditingEvent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          {/* Deleteボタンは編集モードで表示 */}
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <>
          <p>{event || 'No event'}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default EventPopup;
