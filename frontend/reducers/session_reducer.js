import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = { currentUserId: null };


const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUserId: action.user.id });
    case LOGOUT_CURRENT_USER:
      return merge({}, state, { currentUserId: null });
    default:
      return state;
  }
};

export default sessionReducer;