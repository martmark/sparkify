import * as SongAPIUtil from './../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

const receiveSong = song => {
  return({
    type: RECEIVE_SONG,
    song
  });
}

const receiveSongs = songs => {
  return({
    type: RECEIVE_SONGS,
    songs
  });
};

export const fetchSongs = fetchType => dispatch => {
  return SongAPIUtil.fetchSongs(fetchType).then(songs => {
    dispatch(receiveSongs(songs));
  });
};

export const followSong = id => dispatch => {
  return SongAPIUtil.followSong(id).then(song => {
    return dispatch(receiveSong(song));
  });
};

export const unfollowSong = id => dispatch => {
  return SongAPIUtil.unfollowSong(id).then(song => {
    return dispatch(receiveSong(song));
  });
};