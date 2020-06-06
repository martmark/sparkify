import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import { PlayPauseButton } from './media_buttons.jsx';

export default ({ shouldPlay, trackUrl, gotoNextSong }) => {
  const {
    playing,
    ended,
    togglePlayPause,
    loading,
    ready
  } = useAudioPlayer({
    src: trackUrl,
    autoplay: shouldPlay,
    onend: gotoNextSong,
    onerror: gotoNextSong
  });

  useEffect(() => {
    if (ended) {
      gotoNextSong();
    }
  },
    [ended]
  )

  console.log(loading, trackUrl.length, trackUrl.length === 0);

  // Render no op button if loading or empty track
  return (loading || trackUrl.length === 0 ? (
    <PlayPauseButton playing={true} />
  ) : (
    <PlayPauseButton playing={playing} onClick={togglePlayPause}/>
  ));
}

