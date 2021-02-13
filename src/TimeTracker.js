import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Start from './Start';
import Stop from './Stop';

export default function TimeTracker(props) {
  const parseTime = useCallback(() => {
    let seconds = Math.round((props.elapsed / 1000) % 60);
    let minutes = Math.round(((props.elapsed / (1000 * 60)) % 60));
    let hours = Math.round(((props.elapsed / (1000 * 60 * 60)) % 24));
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
      <p>Start: {props.displayStart}</p>
      <p>Stop: {props.displayStop}</p>
      <p>Elapsed: {props.displayElapsed}</p>
      <div id="timer-controls">
        {props.running ? stop : start}
      </div>
    </div>
  )
};