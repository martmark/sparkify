import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useAudioPosition } from 'react-use-audio-player';

export default ({ isPlaying, currentTime, durationString, updateContainerCursor }) => {
  const [percent, setPercent] = React.useState(0);
  const [timeString, setTimeString] = useState('0:00');

  // Set default duration to an arbritrary high number so the cursor sits on
  // the left edge of the bar when no song is playing
  const {
    position = 0,
    duration = 100,
    seek
  } = useAudioPosition({ highRefreshRate: true });

  const setNewTime = (newTime) => {
    const newPercent = timeToPercent(newTime, duration);
    setPercent(newPercent);
    updateContainerCursor(newPercent);
    if (isNaN(position) || isNaN(duration)) return;
    setTimeString(floatTimeToString(newTime));
  };

  useEffect(() => {
    setNewTime(currentTime);
    seek(currentTime);
  },
    [currentTime]
  );

  useEffect(() => {
    setNewTime(position);
  },
    [position, duration]
  );

  const changeCursorPosition = ({target: { value }}) => {
    setPercent(value);
    updateContainerCursor(value);
    if (isNaN(position) || isNaN(duration)) return;
    const newTime = percentToTime(value, duration);
    seek(newTime);
    setTimeString(floatTimeToString(newTime));
  }

  return (
    <div className='mp-progress'>
      <span className='current-time-display'>{timeString}</span>
      <input
        id="the-progress-bar"
        type="range"
        min="0"
        max="1000"
        step="1"
        value={percent}
        onChange={changeCursorPosition}
      />
      <span className='duration-display' id='durationspan'>{durationString}</span>
    </div>
  );
}

const floatTimeToString = (floatTime) => {
  const minutes = Math.floor(floatTime / 60);
  const seconds = Math.floor(floatTime) % 60;
  const secStr = (seconds < 10 ? '0' + seconds : seconds);

  return minutes.toString() + ':' + secStr;
}

const percentToTime = (percent, duration) => {
  return (percent * duration) / 1000 || 0;
}

const timeToPercent = (time, duration) => {
  // Set percent to zero if given invalid input or duration is 0
  return (isNaN(time)
    || isNaN(duration)
    || duration === 0
    ? 0
    : (time / duration) * 1000 || 0);
}

