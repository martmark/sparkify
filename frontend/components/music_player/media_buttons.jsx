import React from 'react';
import { IconContext } from 'react-icons';
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
  MdQueueMusic
} from 'react-icons/md';

export const PlayPauseButton = ({playing, ...props}) => {
  return playing ? (
    <IconContext.Provider
      value={{ className: "play-icon reacticon", size: "3em" }}
    >
      <MdPauseCircleOutline {...props} />
    </IconContext.Provider>
  ) : (
    <IconContext.Provider
      value={{ className: "play-icon reacticon", size: "3em" }}
    >
      <MdPlayCircleOutline {...props} />
    </IconContext.Provider>
  );
};

