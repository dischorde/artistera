import { RECEIVE_COURSE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/reviews_actions.js';
import merge from 'lodash/merge';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_COURSE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge(newState, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
