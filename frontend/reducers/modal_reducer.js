import { OPEN_MODAL, CLOSE_MODAL } from './../actions/modal_actions';
import { RECEIVE_MODAL_PLAYLISTS } from './../actions/playlist_actions';

const modalReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return {modalType: null};
    case RECEIVE_MODAL_PLAYLISTS:
      let newState = Object.assign({}, state, { playlists: action.playlists });
      return newState;
    default:
      return state;
  }
}

export default modalReducer;