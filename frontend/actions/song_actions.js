export const REMOVE_SONGS = 'REMOVE_SONGS';

const removeSongs = () => {
  return({
    type: REMOVE_SONGS,
    songs: {}
  });
};

export const clearSongs = () => dispatch => {
    return dispatch(removeSongs());
  };