import React, { useState, useEffect, useCallback } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import { PlayPauseButton } from './media_buttons.jsx';

const Song = ({
  shouldPlay,
  toggleShouldPlay,
  setShouldPlay,
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
    play,
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
    } else if (shouldPlay && !playing) {
      play();
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

  const togglePlaying = useCallback(() => {
    setShouldPlay(!playing);
    togglePlayPause();
  },
    [playing, togglePlayPause, setShouldPlay]
  );

  // Render no-op button if loading or empty track
  return (loading || trackUrl.length === 0 ? (
    <PlayPauseButton playing={true} />
  ) : (
    <PlayPauseButton
      playing={playing}
      onClick={togglePlaying}
    />
  ));
}

export { Song as default };

