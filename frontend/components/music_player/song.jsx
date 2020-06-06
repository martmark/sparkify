import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import { PlayPauseButton } from './media_buttons.jsx';

export default ({ shouldPlay, trackUrl, gotoNextSong }) => {
  console.log(shouldPlay);
  const {
    play,
    pause,
    playing,
    togglePlayPause,
    loading,
    ready
  } = useAudioPlayer({
    src: trackUrl,
    autoplay: shouldPlay,
    onend: gotoNextSong,
    onerror: gotoNextSong
  });

  // Set seek marker to constantly re-render into correct position
  useEffect(() => {
    if (shouldPlay && !playing) {
      play();
    } else if (!shouldPlay && playing) {
      pause();
    }
  },
    [shouldPlay, playing]
  );

  return (
    <PlayPauseButton playing={playing} onClick={togglePlayPause}/>
  );
}

