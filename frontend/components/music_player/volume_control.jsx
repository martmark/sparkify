import React, { useState, useCallback } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import { IconContext } from "react-icons";
import {
  IoMdVolumeHigh,
  IoMdVolumeOff
} from 'react-icons/io';

const VolumeControl = () => {
  const { volume } = useAudioPlayer();
  const [stateVolume, setStateVolume] = useState(1);
  const [prevVol, setPrevVol] = useState(1);

  const handleChange = useCallback(({ target: { value }}) => {
    setPrevVol(stateVolume);
    setStateVolume(value);
    return volume(value);
  },
    [volume]
  );

  const mutePlayer = () => {
    setPrevVol(stateVolume);
    setStateVolume(0);
    return volume(0);
  }

  const unmutePlayer = () => {
    const newVol = prevVol;
    setStateVolume(newVol);
    setPrevVol(0);
    return volume(newVol);
  }

  return (
    <React.Fragment>
      <IconContext.Provider
        value={{ className: "volume-button", size: "1.25em" }}
      >
        {(stateVolume > 0 ? (
          <IoMdVolumeHigh onClick={mutePlayer} />
        ) : (
          <IoMdVolumeOff onClick={unmutePlayer} />
        ))}
      </IconContext.Provider>;

      <input
        id="vol-control"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={stateVolume}
        onChange={handleChange}
      />
    </React.Fragment>
  );
}

export { VolumeControl as default };
