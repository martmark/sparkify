import { RECEIVE_CURRENT_USER } from './../actions/session_actions';

const defaultState = {status: true};

const loadingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {status: false};
    default:
      return state;
  }
};

export default loadingReducer;