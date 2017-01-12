import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import CoursesReducer from './courses_reducer.js';

const rootReducer = combineReducers({
  session: SessionReducer,
  courses: CoursesReducer
});

export default rootReducer;
