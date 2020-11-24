import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

// Include reducers
export default combineReducers({
  alert,
  auth
});
