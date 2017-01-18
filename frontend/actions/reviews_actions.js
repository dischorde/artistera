import * as ReviewsAPIUtil from '../util/reviews_api_util.js';

export const RECEIVE_COURSE_REVIEWS = "RECEIVE_COURSE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

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

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
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
  .then(newRev => dispatch(receiveReview(newRev)))
  .fail( error => dispatch(receiveReviewErrors({ new: error.responseJSON})));
};

export const updateReview = (review) => dispatch => {
  return ReviewsAPIUtil.updateReview(review)
  .then(updatedRev => dispatch(receiveReview(updatedRev)))
  .fail( error => dispatch(receiveReviewErrors({ update: error.responseJSON})));
};

export const deleteReview = (id) => dispatch => {
  return ReviewsAPIUtil.deleteReview(id)
  .then(review => dispatch(removeReview(review)));
};
