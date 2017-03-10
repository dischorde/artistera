import * as SessionsAPIUtil from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signin = user => dispatch => {
  return SessionsAPIUtil.signin(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const logout = () => dispatch => {
  return SessionsAPIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null))
  );
};
