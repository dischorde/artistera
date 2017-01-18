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
