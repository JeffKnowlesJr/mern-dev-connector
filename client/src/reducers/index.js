import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';

// Include reducers
export default combineReducers({
  alert,
  auth,
  profile
});
