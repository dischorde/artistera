import * as ProjectsAPIUtil from '../util/projects_api_util.js';
import * as AttachmentsAPIUtil from '../util/attachments_api_util.js';
import { hashHistory } from 'react-router';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT_DETAILS = "RECEIVE_PROJECT_DETAILS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

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

export const updateProject = (formData, ids) => dispatch => {
  return ProjectsAPIUtil.updateProject(formData, ids)
  .then(updatedProj => {
    dispatch(receiveProject(updatedProj));
    return updatedProj;
  });
};


// WITH ATTACHMENTS
// TODO: pass in all the attachments to create from the form as an array of attachments.
// may also have to do someting with the cover_img
//

export const createNewProject = (project, attachments) => dispatch => {
  return ProjectsAPIUtil.createProject(project.formData, project.assignmentId)
  .then(newProj => {
    return dispatch(handleAttachments(attachments, newProj));
  });
};

//
// export const updateProject = formInput => dispatch => {
//   return ProjectsAPIUtil.updateProject({project: formInput.project})
//   .then(updatedProj => {
//     handleAttachments(formInput.attachments, updatedProj);
//   });
// };
//
//

const handleAttachments = (attachments, project) => dispatch => {
  const createAttachments = (idx) => {
     if (idx < attachments.length) {
       let newAttachment = attachments[idx];
       newAttachment.append("attachment[attachable_id]", project.id);
       AttachmentsAPIUtil.attach(newAttachment)
       .then(() => createAttachments(idx + 1));
     }
     else {
       dispatch(receiveProject(project));
       hashHistory.push(`projects/${project.id}`);
     }
  };

  createAttachments(0);
};
