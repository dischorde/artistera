import * as CoursesAPIUtil from '../util/courses_api_util.js';

export const RECEIVE_ALL_COURSES = "RECEIVE_ALL_COURSES";
export const RECEIVE_COURSE = "RECEIVE_COURSE";

export const receiveAllCourses = courses => ({
  type: RECEIVE_ALL_COURSES,
  courses
});

export const receiveCourse = course => ({
  type: RECEIVE_COURSE,
  course
});

export const requestAllCourses = () => dispatch => {
  return CoursesAPIUtil.fetchCourses()
  .then(courses => dispatch(receiveAllCourses(courses)));
};

export const requestCourse = id => dispatch => {
  return CoursesAPIUtil.fetchCourse(id)
  .then(course => {
    dispatch(receiveCourse(course));
  }
  );
};
