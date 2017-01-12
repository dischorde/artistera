import { RECEIVE_COURSE } from '../actions/courses_actions.js';
import merge from 'lodash/merge';

const CourseDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COURSE:
      return action.course;
    default:
      return state;
  }
};

export default CourseDetailReducer;
