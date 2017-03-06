import * as APIUtil from '../util/session_api_util.js';
import * as EnrollmentsAPIUtil from '../util/enrollments_api_util.js';

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

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const signin = user => dispatch => {
  return APIUtil.signin(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null))
  );
};

export const enroll = (courseId, userId) => dispatch => {
  return EnrollmentsAPIUtil.createEnrollment(courseId, userId).then(
    (user) => dispatch(receiveCurrentUser(user))
  );
};

export const unenroll = (courseId, userId) => dispatch => {
  return EnrollmentsAPIUtil.deleteEnrollment(courseId, userId).then(
    (user) => dispatch(receiveCurrentUser(user))
  );
};
