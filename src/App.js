import React, { useState, useEffect } from 'react';
import './App.css';
import TimeTracker from './TimeTracker';

function App() {
  const [displayStart, setDisplayStart] = useState('');
  const [displayStop, setDisplayStop] = useState('');
  const [displayElapsed, setDisplayElapsed] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [stopTime, setStopTime] = useState(null);
  const [elapsed, setElapsed] = useState(null);
  const [running, setRunning] = useState(false);

  const getDateTime = (startStop) => {
    let dateTime = Intl.DateTimeFormat('en', {
      timeStyle: 'medium',
      dateStyle: 'short',
      hourCycle: 'h24'
    }).format(Date.now());

    if (startStop === 'start') {
      setRunning(true);
      setStartTime(Date.now());
      setDisplayStart(dateTime);
      if (stopTime !== null) {
        setDisplayElapsed(null);
        setDisplayStop(null);
        setElapsed(null);
        setStopTime(null);
      }
    } else if (startStop === 'stop') {
      setRunning(false);
      setStopTime(Date.now());
      setDisplayStop(dateTime)
    }
  };
  
  useEffect(() => {
    if (stopTime) {
      setElapsed((Math.round(stopTime - startTime)));
    }
  }, [startTime, stopTime]);

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
        running={running}
      />
    </div>
  );
};

export default App;