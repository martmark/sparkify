import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import { PlayPauseButton } from './media_buttons.jsx';

const Song = ({
  shouldPlay,
  reset,
  trackUrl = "",
  gotoNextSong,
  persistentVolume,
  setContainerPlaying
}) => {
  const {
    playing,
    ended,
    togglePlayPause,
    pause,
    stop,
    loading,
    ready,
  } = useAudioPlayer({
    src: trackUrl,
    autoplay: shouldPlay,
    onend: gotoNextSong,
    onerror: gotoNextSong,
    volume: persistentVolume
  });

  useEffect(() => {
    if (!shouldPlay && !reset) {
      pause();
    }
  },
    [shouldPlay, reset]
  )

  useEffect(() => {
    if (reset) {
      stop();
    }
    return stop;
  },
    [reset]
  )

  useEffect(() => {
    if (ended) {
      setContainerPlaying(false);
      gotoNextSong();
    }
  },
    [ended]
  )

  // Render no-op button if loading or empty track
  return (loading || trackUrl.length === 0 ? (
    <PlayPauseButton playing={true} />
  ) : (
    <PlayPauseButton playing={playing} onClick={togglePlayPause}/>
  ));
}

export { Song as default };

