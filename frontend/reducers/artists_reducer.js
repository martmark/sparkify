import { RECEIVE_ARTIST } from './../actions/artist_actions';
import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return merge({}, state, { [action.payload.artist.id]: action.payload.artist});
    default:
      return state;
  }
}

export default artistsReducer;