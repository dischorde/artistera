import { RECEIVE_PROJECT_DETAILS,
          REPLACE_ATTACHMENTS,
          REMOVE_PROJECT,
          RECEIVE_PROJ_ERRORS,
          CLEAR_ERRORS,
          CLEAR_PROJ_ERRORS } from '../actions/projects_actions.js';
import { hashHistory } from 'react-router';
import merge from 'lodash/merge';

const _nullState = {
  errors: {
    project: [],
    attachments: []
  }
};


const ProjectDetailReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PROJECT_DETAILS:
      return merge(newState, action.project);
    case REPLACE_ATTACHMENTS:
      newState.attachments = action.attachments;
      return newState;
    case REMOVE_PROJECT:
      hashHistory.push("/");
      return state;
    case RECEIVE_PROJ_ERRORS:
      newState.errors = merge(newState.errors, action.errors);
      return newState;
    case CLEAR_ERRORS:
      newState.errors = {
        project: [],
        attachments: []
      };
      return newState;
    case CLEAR_PROJ_ERRORS:
      newState.errors.project = [];
      return newState;
    default:
      return state;
  }
};

export default ProjectDetailReducer;
