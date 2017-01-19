import values from 'lodash/values';

export const selectAllCourses = (state) => {
  return values(state.courses);
};

export const selectAllProjects = (state) => {
  return values(state.projects);
};

export const selectAllReviews = (state) => {
  return values(state.reviews);
};

export const selectFourProjects = (state) => {
  return selectAllProjects(state).slice(0, 4);
};

export const selectEightCourses = (state) => {
  return selectAllCourses(state).slice(0, 8);
};
