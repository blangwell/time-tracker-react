import React, { useEffect } from 'react';
import Start from './Start';
import Stop from './Stop';

export default function TimeTracker(props) {
  const parseTime = () => {
    let seconds = Math.round((props.elapsed / 1000) % 60);
    let minutes = Math.round(((props.elapsed / (1000 * 60)) % 60));
    let hours = Math.round(((props.elapsed / (1000 * 60 * 60)) % 24));
    props.setDisplayElapsed(`${hours || '00'}:${minutes || '00'}:${seconds.length > 1 ? seconds : `0${seconds}` || '00'}`);
  }

  useEffect(() => {
    parseTime();
  }, [props.elapsed])

  return (
    <div>
      <h2>This is the actual tracker</h2>
      <p>Start: {props.displayStart}</p>
      <p>Stop: {props.displayStop}</p>
      <p>Elapsed: {props.displayElapsed}</p>
      <div id="timer-controls">
        <Start getDateTime={props.getDateTime}/>
        <Stop 
          getDateTime={props.getDateTime} 
          parseTime={parseTime}
        />
      </div>
    </div>
  )
}