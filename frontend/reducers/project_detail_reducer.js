import { RECEIVE_PROJECT_DETAILS, REPLACE_ATTACHMENTS } from '../actions/projects_actions.js';
import merge from 'lodash/merge';

const ProjectDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PROJECT_DETAILS:
      return action.project;
    case REPLACE_ATTACHMENTS:
      let newState = merge({}, state);
      newState.attachments = action.attachments;
      return newState;
    default:
      return state;
  }
};

export default ProjectDetailReducer;
