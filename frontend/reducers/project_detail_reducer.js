import { RECEIVE_PROJECT_DETAILS, REPLACE_ATTACHMENTS, REMOVE_PROJECT } from '../actions/projects_actions.js';
import { hashHistory } from 'react-router';
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
    case REMOVE_PROJECT:
      hashHistory.push("/");
      return state;
    default:
      return state;
  }
};

export default ProjectDetailReducer;
