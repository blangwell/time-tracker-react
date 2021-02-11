import React, { useState, useEffect } from 'react';
import './App.css';
import Start from './Start';
import Stop from './Stop';
import TimeTracker from './TimeTracker';

function App() {
  const [startTime, setStartTime] = useState(null);
  const [stopTime, setStopTime] = useState(null);
  const [timeTotal, setTimeTotal] = useState(null);

  const getDateTime = (startStop) => {
    let dateTime = Intl.DateTimeFormat('en', {
      timeStyle: 'short',
      dateStyle: 'short',
      hourCycle: 'h24'
    }).format(Date.now());

    if (startStop === 'start') {
      setStartTime(Date.now());
    } else if (startStop === 'stop') {
      setStopTime(Date.now());
    }
  }
  
  useEffect(() => {
    if (stopTime) {
      setTimeTotal(Math.round(Math.floor(stopTime - startTime) / 1000))
    }
  }, [stopTime])

  return (
    <div className="App">
      <h1>Time Tracker</h1>
      <TimeTracker/>
      <Start getDateTime={getDateTime}/>
      <Stop getDateTime={getDateTime}/>
    </div>
  );
}

export default App;
