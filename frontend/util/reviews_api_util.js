export const fetchReviews = (course_id) => (
  $.ajax({
    method: "GET",
    url: `/api/courses/${course_id}/reviews`,
    data: { course_id }
  })
);

export const fetchReview = (id, courseId) => (
  $.ajax({
    method: "GET",
    url:`/api/courses/${courseId}/reviews/${id}`,
  })
);

export const createReview = (review) => (
  $.ajax({
    method: "POST",
    url:`/api/courses/${review.course_id}/reviews`,
    data: { review }
  })
);

export const updateReview = (review) => (
  $.ajax({
    method: "PATCH",
    url:`/api/courses/${review.course_id}/reviews/${review.id}`,
    data: { review }
  })
);

export const deleteReview = (id, courseId) => (
  $.ajax({
    method: "DELETE",
    url:`/api/courses/${courseId}/reviews/${id}`,
  })
);
