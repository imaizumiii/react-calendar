// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Calendar from './components/Calender';


const App = () => {
  return (
    <div className="App">
      <h1>Study Calendar</h1>
      <Calendar />
    </div>
  );
};

export default App;
