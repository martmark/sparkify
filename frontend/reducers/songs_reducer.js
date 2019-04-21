import { RECEIVE_PLAYLIST } from './../actions/playlist_actions';
import merge from 'lodash/merge';
import { RECEIVE_ALBUM } from './../actions/album_actions';
import { RECEIVE_SONGS } from './../actions/song_actions';
import { RECEIVE_ARTIST } from './../actions/artist_actions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_PLAYLIST:
      if (action.payload.songs) {
        return action.payload.songs;
      } else {
        return {};
      }
    case RECEIVE_ALBUM:
      return action.payload.songs;
    case RECEIVE_ARTIST:
      return action.payload.songs;
    default:
      return state;
  }
}

export default songsReducer;