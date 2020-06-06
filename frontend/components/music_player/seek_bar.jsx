import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useAudioPosition } from 'react-use-audio-player';

export default ({ isPlaying, currentSong }) => {
  const { position = 0, duration = 100, seek } = useAudioPosition({ highRefreshRate: true });
  const [percent, setPercent] = React.useState(0);
  const [timeString, setTimeString] = useState('0:00');

  useEffect(() => {
    setPercent(timeToPercent(position, duration));
    if (isNaN(position) || isNaN(duration)) return;
    setTimeString(floatTimeToString(position));
  },
    [position, duration]
  );

  const changeCursorPosition = ({target: { value }}) => {
    setPercent(value);
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
      <span className='duration-display' id='durationspan'>{currentSong.duration}</span>
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

