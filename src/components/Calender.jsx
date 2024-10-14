import React, { useState, useEffect } from "react";
import CalendarHeader from "./calendar/CalendarHeader";
import CalendarGrid from "./calendar/CalendarGrid";
import EventPopup from "./EventPopup";

const Calendar = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [editingEvent, setEditingEvent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // ページロード時にローカルストレージからデータを取得し、現在の年月を設定
  useEffect(() => {
    const savedEvents = localStorage.getItem("calendar-events");
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }

    // 今日の日付を設定
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
  }, []);

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    resetSelection();
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    resetSelection();
  };

  const handleDayClick = (day) => {
    setSelectedDate(`${currentYear}-${currentMonth}-${day}`);
    setEditingEvent(events[`${currentYear}-${currentMonth}-${day}`] || "");
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedEvents = {
      ...events,
      [selectedDate]: editingEvent,
    };
    setEvents(updatedEvents);

    // ローカルストレージに保存
    localStorage.setItem("calendar-events", JSON.stringify(updatedEvents));

    setIsEditing(false);
  };

  // イベントの削除機能
  const handleDelete = () => {
    const updatedEvents = { ...events };
    delete updatedEvents[selectedDate]; // 選択された日付のイベントを削除

    // ステートとローカルストレージを更新
    setEvents(updatedEvents);
    localStorage.setItem("calendar-events", JSON.stringify(updatedEvents));

    setEditingEvent(""); // テキストエリアをクリア
    setIsEditing(false); // 編集モードを終了
  };

  return (
    <div>
      <CalendarHeader
        currentYear={currentYear}
        currentMonth={currentMonth}
        months={months}
        onNextMonth={nextMonth}
        onPrevMonth={prevMonth}
      />
      <CalendarGrid
        daysInMonth={daysInMonth}
        events={events}
        currentYear={currentYear}
        currentMonth={currentMonth}
        onDayClick={handleDayClick}
      />
      {selectedDate && (
        <EventPopup
          selectedDate={selectedDate}
          event={editingEvent}
          isEditing={isEditing}
          setEditingEvent={setEditingEvent}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleDelete={handleDelete} // 削除機能をポップアップに渡す
        />
      )}
    </div>
  );
};

export default Calendar;
