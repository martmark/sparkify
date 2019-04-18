import * as PlaylistUtil from './../util/playlist_api_util';

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

export const fetchPlaylists = () => dispatch => {
  return PlaylistUtil.fetchPlaylists().then(playlists => {
    return dispatch(receivePlaylists(playlists))
  })
}

export const fetchPlaylist = id => dispatch => {
  return PlaylistUtil.fetchPlaylist(id).then(payload => {
    return dispatch(receivePlaylist(payload));
  })
}

export const createPlaylist = playlist => dispatch => {
  return PlaylistUtil.createPlaylist(playlist).then(playlist => {
    return dispatch(receivePlaylist(playlist));
  })
}

export const updatePlaylist = playlist => dispatch => {
  return PlaylistUtil.updatePlaylist(playlist).then(playlist => {
    return dispatch(receivePlaylist(playlist));
  })
}