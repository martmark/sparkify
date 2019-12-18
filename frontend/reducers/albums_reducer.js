import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from './../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { [action.payload.album.id]: action.payload.album });
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ARTIST:
      return action.payload.albums;
    default:
      return state;
  }
}

export default albumsReducer;