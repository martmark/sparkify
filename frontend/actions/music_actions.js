export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const SET_QUEUE = 'SET_QUEUE';

export const setCurrentSong = song => {
  return({
    type: SET_CURRENT_SONG,
    song
  });
};

export const togglePlay = () => {
  return({
    type: TOGGLE_PLAY
  });
};

export const setQueue = queue => {
  return({
    type: SET_QUEUE,
    queue
  });
};