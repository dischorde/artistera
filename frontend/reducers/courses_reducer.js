import { RECEIVE_ALL_COURSES } from '../actions/courses_actions.js';
import merge from 'lodash/merge';

const CoursesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_COURSES:
      return action.courses;
    default:
      return state;
  }
};

export default CoursesReducer;
