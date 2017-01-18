export const fetchReviews = (course_id) => (
  $.ajax({
    method: "GET",
    url: `/api/courses/${course_id}/reviews`,
    data: { course_id }
  })
);

export const fetchReview = (id) => (
  $.ajax({
    method: "GET",
    url:`/api/reviews/${id}`,
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
    url:`/api/reviews/${review.id}`,
    data: { review }
  })
);

export const deleteReview = (id) => (
  $.ajax({
    method: "DELETE",
    url:`/api/reviews/${id}`,
  })
);
