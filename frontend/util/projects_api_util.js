export const fetchProjects = () => (
  $.ajax({
    method: "GET",
    url: "/api/projects"
  })
);

export const fetchProject = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/projects/${id}`
  })
);

export const createProject = (formData, assignmentId) => {
  debugger;
  return $.ajax({
    url: `/api/assignments/${assignmentId}/projects`,
    method: "POST",
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updateProject = (formData, ids) => (
  $.ajax({
    method: "PATCH",
    contentType: false,
    processData: false,
    url:`/api/assignments/${ids.assignment_id}/projects/${ids.id}`,
    data: formData
  })
);

export const deleteProject = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/projects/${id}`
  })
);
