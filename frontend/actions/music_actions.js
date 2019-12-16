export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const SET_QUEUE = 'SET_QUEUE';
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const CLEAR_UP_NEXT = 'CLEAR_UP_NEXT';

export const setCurrentSong = queueInfo => {
  return({
    type: SET_CURRENT_SONG,
    queueInfo
  });
};

export const togglePlay = () => {
  return({
    type: TOGGLE_PLAY
  });
};

export const setQueue = queueInfo => {
  return({
    type: SET_QUEUE,
    queueInfo
  });
};

export const addToQueue = song => {
  return {
    type: ADD_TO_QUEUE,
    song
  };
};

export const clearUpNext = () => {
  return {
    type: CLEAR_UP_NEXT
  };
};