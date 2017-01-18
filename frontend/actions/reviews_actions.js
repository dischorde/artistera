import * as ReviewsAPIUtil from '../util/reviews_api_util.js';

export const RECEIVE_COURSE_REVIEWS = "RECEIVE_COURSE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";


export const receiveCourseReviews = reviews => ({
  type: RECEIVE_COURSE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const requestCourseReviews = (courseId) => dispatch => {
  return ReviewsAPIUtil.fetchReviews(courseId)
  .then(reviews => dispatch(receiveCourseReviews(reviews)));
};

export const requestReview = (id) => dispatch => {
  return ReviewsAPIUtil.fetchReview(id)
  .then(review => dispatch(receiveReview(review)));
};

export const createReview = (review) => dispatch => {
  return ReviewsAPIUtil.createReview(review)
  .then(newRev => dispatch(receiveReview(newRev)));
};

export const updateReview = (review) => dispatch => {
  return ReviewsAPIUtil.updateReview(review)
  .then(updatedRev => dispatch(receiveReview(updatedRev)));
};

export const deleteReview = (id) => dispatch => {
  return ReviewsAPIUtil.deleteReview(id)
  .then(review => dispatch(removeReview(review)));
};
