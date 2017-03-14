import * as UsersAPIUtil from '../util/user_api_util.js';
import * as EnrollmentsAPIUtil from '../util/enrollments_api_util.js';
import { receiveErrors, receiveCurrentUser } from './session_actions.js';

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});

export const requestProfile = (id) => dispatch => {
  return UsersAPIUtil.fetchProfile(id).then(
    profile => dispatch(receiveProfile(profile))
  );
};

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
