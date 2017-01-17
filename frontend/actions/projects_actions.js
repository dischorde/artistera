import * as ProjectsAPIUtil from '../util/projects_api_util.js';
import * as AttachmentsAPIUtil from '../util/attachments_api_util.js';
import { hashHistory } from 'react-router';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT_DETAILS = "RECEIVE_PROJECT_DETAILS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const REPLACE_ATTACHMENTS = "REPLACE_ATTACHMENTS";
export const RECEIVE_PROJ_ERRORS = "RECEIVE_PROJ_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CLEAR_PROJ_ERRORS = "CLEAR_PROJ_ERRORS";

export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProjectDetails = project => ({
  type: RECEIVE_PROJECT_DETAILS,
  project
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const removeProject = project => ({
  type: REMOVE_PROJECT,
  project
});

export const replaceAttachments = attachments => ({
  type: REPLACE_ATTACHMENTS,
  attachments
});

export const receiveProjErrors = errors => ({
  type: RECEIVE_PROJ_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const clearProjErrors = () => ({
  type: CLEAR_PROJ_ERRORS
});



export const requestAllProjects = () => dispatch => {
  return ProjectsAPIUtil.fetchProjects()
  .then(projects => dispatch(receiveAllProjects(projects)));
};

export const requestProject = id => dispatch => {
  return ProjectsAPIUtil.fetchProject(id)
  .then(project => {
    dispatch(receiveProjectDetails(project));
  });
};


export const destroyProject = id => dispatch => {
  return ProjectsAPIUtil.deleteProject(id).then(deleted => {
    dispatch(removeProject(deleted));
    return deleted;
  });
};

export const deleteAttachment = id => dispatch => {
  return AttachmentsAPIUtil.remove(id).then(
    attachments => {
      dispatch(replaceAttachments(attachments)); }
  );
};

export const createNewProject = (project, attachments) => dispatch => {
  return ProjectsAPIUtil.createProject(project.formData, project.assignmentId)
  .then( newProj => {
    return dispatch(handleAttachments(attachments, newProj, "new"));
  }).fail( error => dispatch(receiveProjErrors({ project: error.responseJSON})));
};


export const updateProject = (project, attachments) => dispatch => {
  return ProjectsAPIUtil.updateProject(project.formData, project.ids)
  .then(updatedProj => {
    return dispatch(handleAttachments(attachments, updatedProj, "update"));
  }).fail( error => dispatch(receiveProjErrors({ project: error.responseJSON})));
};


const handleAttachments = (attachments, project, formType) => dispatch => {
  let newProj = project;
  let errors = [];
  const createAttachments = (idx) => {
     if (idx < attachments.length) {
       let newAttachment = attachments[idx];
       newAttachment.append("attachment[attachable_id]", project.id);
       AttachmentsAPIUtil.attach(newAttachment)
       .then((proj) => {
         newProj = proj;
         createAttachments(idx + 1);
       }).fail((error) => {
         let file = newAttachment.get("attachment[document]");
         errors.push(`Error uploading ${file.name}`);
         createAttachments(idx + 1);
       });
     }
     else {
       dispatch(receiveProjErrors({attachments: errors}));
       dispatch(receiveProjectDetails(newProj));
       if (formType === "new") {
         hashHistory.push(`projects/${project.id}`);
       }
     }
  };

  createAttachments(0);
};
