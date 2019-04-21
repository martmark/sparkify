import { RECEIVE_CURRENT_USER } from './../actions/session_actions';
import { LOADING_TRUE, LOADING_FALSE } from './../actions/loading_actions';

const defaultState = {status: true};

const loadingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOADING_TRUE:
      return {status: true};
    case LOADING_FALSE:
      return {status: false};
    default:
      return state;
  }
};

export default loadingReducer;