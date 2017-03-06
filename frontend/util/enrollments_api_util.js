export const createEnrollment = (courseId, user_id) => (
  $.ajax({
    method: "POST",
    url:`/api/courses/${courseId}/enrollments`,
    data: { user_id }
  })
);

export const deleteEnrollment = (courseId, userId) => (
  $.ajax({
    method: "DELETE",
    url:`/api/courses/${courseId}/enrollments/${userId}`,
  })
);
