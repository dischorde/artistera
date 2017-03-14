import { RECEIVE_PROFILE } from '../actions/user_actions.js';
import merge from 'lodash/merge';

const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PROFILE:
      return action.profile;
    default:
      return state;
  }
};

export default ProfileReducer;
