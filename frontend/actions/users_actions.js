import * as UsersAPIUtil from '../util/users_api_util.js';
import * as EnrollmentsAPIUtil from '../util/enrollments_api_util.js';
import { receiveErrors, receiveCurrentUser } from './session_actions.js';

export const signup = user => dispatch => {
  return UsersAPIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
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
