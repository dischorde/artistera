import values from 'lodash/values';

export const selectAllCourses = (state) => {
  return values(state.courses);
};
