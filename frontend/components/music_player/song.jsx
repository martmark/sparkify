import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import { PlayPauseButton } from './media_buttons.jsx';

export default ({ shouldPlay, trackUrl, gotoNextSong, desiredVolume }) => {
  const {
    playing,
    ended,
    togglePlayPause,
    loading,
    ready,
    volume
  } = useAudioPlayer({
    src: trackUrl,
    autoplay: shouldPlay,
    onend: gotoNextSong,
    onerror: gotoNextSong
  });

  useEffect(() => {
    if (desiredVolume !== volume) {
      volume(desiredVolume);
    }
  },
    [desiredVolume]
  )

  useEffect(() => {
    if (ended) {
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

