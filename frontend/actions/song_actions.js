import * as SongAPIUtil from './../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

const receiveSongs = songs => {
  return({
    type: RECEIVE_SONGS,
    songs
  });
}


export const fetchSongs = fetchType => dispatch => {
  return SongAPIUtil.fetchSongs(fetchType).then(songs => {
    dispatch(receiveSongs(songs));
  });
};

