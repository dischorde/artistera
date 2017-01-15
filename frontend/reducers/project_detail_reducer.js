import { RECEIVE_PROJECT_DETAILS } from '../actions/projects_actions.js';
import merge from 'lodash/merge';

const ProjectDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PROJECT_DETAILS:
      return action.project;
    default:
      return state;
  }
};

export default ProjectDetailReducer;
