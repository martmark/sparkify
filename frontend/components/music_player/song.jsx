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
    onerror: gotoNextSong,
    volume: persistentVolume
  });


  // When the trackUrl changes, stop the current track and load the new one
  useEffect(() => {
    // Avoid calling this on the first render
    if (!loading && trackUrl.length > 0) {
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
    } else if (!reset && ready && shouldPlay && !playing) {
      // Although calling play seems like something we should do here, it causes
      // the last song to start playing if it was paused when gotoNextSong is
      // called.
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
    if (ended && shouldPlay) {
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

