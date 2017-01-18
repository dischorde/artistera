import { RECEIVE_COURSE_REVIEWS,
         RECEIVE_REVIEW,
         REMOVE_REVIEW,
         RECEIVE_REVIEW_ERRORS,
         CLEAR_REVIEW_ERRORS } from '../actions/reviews_actions.js';
import merge from 'lodash/merge';

const _nullState = {
  reviews: {},
  errors: {
    new: [],
    update: []
  }
};

const ReviewsReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_COURSE_REVIEWS:
      newState.reviews = action.reviews;
      return newState;
    case RECEIVE_REVIEW:
      newState.reviews = merge(newState.reviews, {[action.review.id]: action.review});
      return newState;
    case REMOVE_REVIEW:
      delete newState.reviews[action.review.id];
      return newState;
    case RECEIVE_REVIEW_ERRORS:
      newState.errors = merge(newState.errors, action.errors);
      return newState;
    case CLEAR_REVIEW_ERRORS:
      newState.errors = {
        new: [],
        update: []
      };
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
