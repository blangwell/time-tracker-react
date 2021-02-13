import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Start from './Start';
import Stop from './Stop';

export default function TimeTracker(props) {
  const parseTime = useCallback(() => {
    let seconds = Math.round((props.elapsed / 1000) % 60);
    let minutes = Math.floor(((props.elapsed / (1000 * 60)) % 60));
    let hours = Math.floor(((props.elapsed / (1000 * 60 * 60)) % 24));
    if (props.elapsed !== null) {
      props.setDisplayElapsed(`${hours || '0'} hours, ${minutes || '0'} minutes, and ${seconds.length > 1 ? seconds : `${seconds}` || '0'} seconds`);
    } 
  }, [props]);
  
  const start = useMemo(() => <Start getDateTime={props.getDateTime} />, [props.getDateTime])
  const stop = useMemo(() => <Stop getDateTime={props.getDateTime} />, [props.getDateTime])
  
  useEffect(() => {
    parseTime();
  }, [start, stop, parseTime]);
  
  return (
    <div>
      <h2>This is the actual tracker</h2>
      <div class="display-values">
        <p>Start: <span class="date-time">{props.displayStart}</span></p>
        <p>Stop: <span class="date-time">{props.displayStop}</span></p>
        <p>Elapsed: <span class="date-time">{props.displayElapsed}</span></p>
      </div>
      <div id="timer-controls">
        {props.running ? stop : start}
      </div>
    </div>
  )
};