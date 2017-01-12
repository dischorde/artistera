export const fetchCourses = () => (
  $.ajax({
    method: "GET",
    url: "/api/courses"
  })
);

export const fetchCourse = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/courses/${id}`
  })
);
