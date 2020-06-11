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
    load,
    loading,
    ready,
  } = useAudioPlayer({
    src: trackUrl,
    autoplay: shouldPlay,
    onend: gotoNextSong,
    onerror: gotoNextSong,
    volume: persistentVolume
  });

  // When the trackUrl changes, stop the current track and load the new one
  useEffect(() => {
    console.log(trackUrl);
    if (!loading) {
      stop();
      load({ src: trackUrl, autoplay: shouldPlay });
    }
    // Return stop to be used on cleanup
    return stop;
  },
    [trackUrl]
  )

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
    // Return stop to be used on cleanup
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
  return (!ready || trackUrl.length === 0 ? (
    <PlayPauseButton playing={true} />
  ) : (
    <PlayPauseButton
      playing={playing}
      onClick={togglePlaying}
    />
  ));
}

export { Song as default };

