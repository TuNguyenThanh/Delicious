import { combineReducers } from 'redux';
import loginReducers from './loginReducers';

export default combineReducers({
  Login: loginReducers
});
