import React, { useState, useEffect } from 'react';
import './App.css';
import Start from './Start';
import Stop from './Stop';
import TimeTracker from './TimeTracker';

function App() {
  const [displayStart, setDisplayStart] = useState('');
  const [displayStop, setDisplayStop] = useState('');
  const [displayElapsed, setDisplayElapsed] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [stopTime, setStopTime] = useState(null);
  const [elapsed, setElapsed] = useState(null);

  const getDateTime = (startStop) => {
    let dateTime = Intl.DateTimeFormat('en', {
      timeStyle: 'medium',
      dateStyle: 'short',
      hourCycle: 'h24'
    }).format(Date.now());

    if (startStop === 'start') {
      setStartTime(Date.now());
      setDisplayStart(dateTime);
    } else if (startStop === 'stop') {
      setStopTime(Date.now());
      setDisplayStop(dateTime)
    }
  }
  
  useEffect(() => {
    if (stopTime) {
      setElapsed((Math.round(stopTime - startTime)));
    }
  }, [stopTime])

  return (
    <div className="App">
      <h1>Time Tracker</h1>
      <TimeTracker 
        displayStart={displayStart} 
        displayStop={displayStop}
        elapsed={elapsed}
        displayElapsed={displayElapsed}
        setDisplayElapsed={setDisplayElapsed}
        getDateTime={getDateTime}
      />
    </div>
  );
}

export default App;
