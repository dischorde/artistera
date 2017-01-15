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

export const createProject = (project) => {
  return $.ajax({
    method: "POST",
    url: `/api/assignments/${project.assignment_id}/projects`,
    data: { project }
  });
};

export const updateProject = (project) => (
  $.ajax({
    method: "PATCH",
    url:`/api/assignments/${project.assignment_id}/projects/${project.id}`,
    data: { project }
  })
);

export const deleteProject = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/projects/${id}`
  })
);
