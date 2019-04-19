import { RECEIVE_ALBUM } from './../actions/album_actions';
import merge from 'lodash/merge';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return merge({}, state, { [action.payload.album.id]: action.payload.album });
    case RECEIVE_ARTIST:
      return action.payload.albums;
    default:
      return state;
  }
}

export default albumsReducer;