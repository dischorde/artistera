import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const _nullState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
