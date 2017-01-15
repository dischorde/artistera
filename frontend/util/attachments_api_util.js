export const attach = (formData) => (
  $.ajax({
    method: 'POST',
    url: '/api/attachments',
    contentType: false,
    processData: false,
    data: formData
  })
);

export const remove = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/attachments/${id}`
  })
);
