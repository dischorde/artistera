import { RECEIVE_ALL_COURSES, RECEIVE_COURSE } from '../actions/courses_actions.js';
import merge from 'lodash/merge';

const CoursesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_COURSES:
      return action.courses;
    case RECEIVE_COURSE:
      newState[action.course.id] = action.course;
      return newState;
    default:
      return state;
  }
};

export default CoursesReducer;
