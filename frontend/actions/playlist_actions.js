import * as PlaylistAPIUtil from './../util/playlist_api_util';
import * as PlaylistSongApiUtil from './../util/playlist_song_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

const receivePlaylists = playlists => {
  return({
    type: RECEIVE_PLAYLISTS,
    playlists
  })
}

const receivePlaylist = payload => {
  return({
    type: RECEIVE_PLAYLIST,
    payload
  })
}

const removePlaylist = playlistId => {
  return({
    type: REMOVE_PLAYLIST,
    playlistId
  })
}

export const fetchPlaylists = (fetchType) => dispatch => {
  return PlaylistAPIUtil.fetchPlaylists(fetchType).then(playlists => {
    return dispatch(receivePlaylists(playlists))
  })
}

export const fetchPlaylist = id => dispatch => {
  return PlaylistAPIUtil.fetchPlaylist(id).then(payload => {
    return dispatch(receivePlaylist(payload));
  })
}

export const createPlaylist = playlist => dispatch => {
  return PlaylistAPIUtil.createPlaylist(playlist).then(payload => {
    return dispatch(receivePlaylist(payload));
  })
}

export const updatePlaylist = playlist => dispatch => {
  return PlaylistAPIUtil.updatePlaylist(playlist).then(playlist => {
    return dispatch(receivePlaylist(playlist));
  })
}

export const deletePlaylist = id => dispatch => {
  return PlaylistAPIUtil.deletePlaylist(id).then(() => {
    return dispatch(removePlaylist(id));
  })
}

export const removeSongFromPlaylist = playlistSong => dispatch => {
  return PlaylistSongApiUtil.removePlaylistSong(playlistSong).then(playlist => {
    return dispatch(receivePlaylist(playlist));
  })
}