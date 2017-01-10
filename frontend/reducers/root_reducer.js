import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';

const rootReducer = combineReducers({
  session: SessionReducer
});

export default rootReducer;
