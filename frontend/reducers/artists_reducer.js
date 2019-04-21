import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from './../actions/artist_actions';
import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return action.payload.artist;
    case RECEIVE_ARTISTS:
      return action.artists;
    default:
      return state;
  }
}

export default artistsReducer;