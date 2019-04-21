import * as SongAPIUtil from './../util/song_api_util';

export const REMOVE_SONGS = 'REMOVE_SONGS';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';

const removeSongs = () => {
  return({
    type: REMOVE_SONGS,
    songs: {}
  });
};

const receiveSongs = songs => {
  return({
    type: RECEIVE_SONGS,
    songs
  });
};

export const clearSongs = () => dispatch => {
  return dispatch(removeSongs());
};

export const fetchSongs = fetchType => dispatch => {
  return SongAPIUtil.fetchSongs(fetchType).then(songs => {
    dispatch(receiveSongs(songs));
  });
};