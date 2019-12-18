import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from './../actions/playlist_actions';
import { RECEIVE_CURRENT_USER } from './../actions/session_actions';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, { [action.payload.playlist.id]: action.payload.playlist });
    case REMOVE_PLAYLIST:
      const playlistId = action.playlistId;
      let newState = Object.assign({}, state);
      delete newState[playlistId];
      return newState;
    default:
      return state;
  }
}

export default playlistsReducer;