import { RECEIVE_PLAYLIST } from './../actions/playlist_actions';
import merge from 'lodash/merge';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      if (action.payload.songs) {
        return action.payload.songs;
      } else {
        return {};
      }
    default:
      return state;
  }
}

export default songsReducer;