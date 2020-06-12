import React from 'react';
import { IconContext } from 'react-icons';
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
  MdQueueMusic
} from 'react-icons/md';
import {
  IoIosRepeat,
  IoIosShuffle,
  IoMdVolumeHigh,
  IoMdVolumeOff
} from 'react-icons/io';
import { useAudioPosition } from 'react-use-audio-player';

export const BackButton = ({ gotoLastSong }) => {
  const { position, seek } = useAudioPosition();

  const backClickHandler = () => {
    // Go to last song if at start of song or song hasn't loaded
    if (isNaN(position) || position < 10) {
      gotoLastSong();
    } else {
      seek(0);
    }
  };

  return (
    <IconContext.Provider
      value={{ className: "play-icon reacticon", size: "2em" }}
    >
      <MdSkipPrevious onClick={backClickHandler} />
    </IconContext.Provider>
  );
}

export const ForwardButton = (props) => (
  <IconContext.Provider
    value={{ className: "play-icon reacticon", size: "2em" }}
  >
    <MdSkipNext {...props} />
  </IconContext.Provider>
);

const PlayIcon = ({ children }) => (
  <IconContext.Provider
    value={{ className: "play-icon reacticon", size: "3em" }}
  >
    {children}
  </IconContext.Provider>
);

export const PlayPauseButton = ({ playing, ...props }) => (
  <PlayIcon>{ playing ? (
    <MdPauseCircleOutline {...props} />
  ) : (
    <MdPlayCircleOutline {...props} />
  )}</PlayIcon>
);

export const ShuffleButton = ({ isOn, ...props }) =>(
  <IconContext.Provider
    value={{ className: `toggle-shuffle${isOn ? " repeat-on" : ""}`, size: "1.25em" }}
  >
    <IoIosShuffle {...props} />
  </IconContext.Provider>
);

export const RepeatButton = ({ isOn, ...props }) =>(
  <IconContext.Provider
    value={{ className: `toggle-repeat${isOn ? " repeat-on" : ""}`, size: "1.25em" }}
  >
    <IoIosRepeat {...props} />
  </IconContext.Provider>
);

