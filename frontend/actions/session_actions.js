import * as APIUtil from './../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (payload) => {
  return({
    type: RECEIVE_CURRENT_USER,
    payload
  })
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(
    payload => dispatch(receiveCurrentUser(payload)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(() => {
    return dispatch(logoutCurrentUser());
  });
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then(payload => dispatch(receiveCurrentUser(payload)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const demoLogin = () => dispatch => {
  return APIUtil.demoLogin().then(payload => dispatch(receiveCurrentUser(payload)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

