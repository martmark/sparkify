import React, { useState, useRef, useEffect } from 'react';
import {Howl, Howler} from 'howler';

const floatTimeToString = (floatTime) => {
  const minutes = Math.floor(floatTime / 60);
  const seconds = Math.floor(floatTime) % 60;
  const secStr = (seconds < 10 ? '0' + seconds : seconds);

  return minutes.toString() + ':' + secStr;
}

const parseNewTime = (floatCurTime, floatDuration) => {
  return floatDuration * (floatCurTime / 1000);
}

export default ({ playing, currentSong, gotoNextSong }) => {
  const [cursorPosition, setCursorPosition] = useState(
    parseNewTime(currentSong.currentTime, currentSong.duration)
  );
  const [timeString, setTimeString] = useState('0:00');
  // Create song in state so that it only gets created once
  const [song, setSong] = useState(new Howl({
    src: [currentSong.trackUrl],
    autoplay: playing
  }));

  // Set seek marker to constantly re-render into correct position
  useEffect(() => {
    console.log(playing, song);
    if (playing) {
      song.play();
      song.on('end', gotoNextSong);
      song.on('error', gotoNextSong);
    }

    setInterval(() => {
      if (song !== null) {
        setCursorPosition(song.currentTime);
      }
    },
      500
    )
  },
    [playing]
  );

  const setNewCursorPosition = (playerTime, newTime) => {
    newTime = (newTime === undefined ? playerTime : newTime);
    if (playerTime !== undefined) {
      const newTimeFloat = parseNewTime(newTime, currentSong.duration);

      setCursorPosition(newTimeFloat);
      setTimeString(floatTimeToString(newTimeFloat));
    } else {
      setCursorPosition(0);
      setTimeString('0:00');
    }
  }

  const changeCursorPosition = (e) => {
    if (!song.currentTime) return;
    const newTime = parseNewTime(e.target.value);
    setNewCursonPos(song.currentTime, newTime);
  }

    console.log(playing, currentSong);
  return (
    <div className='mp-progress'>
      <span className='current-time-display'>{timeString}</span>
      <input
        id="the-progress-bar"
        type="range"
        min="0"
        max="1000"
        step="1"
        value={cursorPosition || 0.00}
        onChange={changeCursorPosition}
      />
      <span className='duration-display' id='durationspan'>{currentSong.duration}</span>
    </div>
  );
}

