import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import CoursesReducer from './courses_reducer.js';
import ProjectsReducer from './projects_reducer.js';
import CourseDetailReducer from './course_detail_reducer.js';
import ProjectDetailReducer from './project_detail_reducer.js';

const rootReducer = combineReducers({
  session: SessionReducer,
  courses: CoursesReducer,
  courseDetail: CourseDetailReducer,
  projects: ProjectsReducer,
  projectDetail: ProjectDetailReducer
});

export default rootReducer;
