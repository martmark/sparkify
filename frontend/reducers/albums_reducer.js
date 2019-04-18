import { RECEIVE_ALBUM } from './../actions/album_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return merge({}, state, { [action.payload.album.id]: action.payload.album });
    default:
      return state;
  }
}

export default albumsReducer;