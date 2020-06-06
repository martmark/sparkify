import React from 'react';
import { IconContext } from 'react-icons';
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
  MdQueueMusic
} from 'react-icons/md';

const PlayIcon = ({ children }) => (
  <IconContext.Provider
    value={{ className: "play-icon reacticon", size: "3em" }}
  >
    {children}
  </IconContext.Provider>
);

export const PlayPauseButton = ({playing, ...props}) => (
  <PlayIcon>{ playing ? (
    <MdPauseCircleOutline {...props} />
  ) : (
    <MdPlayCircleOutline {...props} />
  )}</PlayIcon>
);

