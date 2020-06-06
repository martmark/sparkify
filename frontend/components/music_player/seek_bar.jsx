import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useAudioPosition } from 'react-use-audio-player';

export default ({ isPlaying, currentSong }) => {
  const { position, duration, seek } = useAudioPosition({ highRefreshRate: true });
  const [percent, setPercent] = React.useState(0);

  const [timeString, setTimeString] = useState('0:00');

  useEffect(() => {
    setPercent(timeToPercent(position, duration));
    setTimeString(floatTimeToString(position));
  },
    [position, duration]
  );

  const changeCursorPosition = (e) => {
    if (!position) return;
    const newTime = percentToTime(e.target.value, duration);
    seek(newTime);
  }

  return (
    <div className='mp-progress'>
      <span className='current-time-display'>{timeString}</span>
      <input
        id="the-progress-bar"
        type="range"
        min="0"
        max="100"
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
  return (percent * duration) / 100 || 0;
}

const timeToPercent = (percent, duration) => {
  return (percent / duration) * 100 || 0;
}

