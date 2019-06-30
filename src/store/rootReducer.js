import { combineReducers } from 'redux';
import book from './books/reducer';
import user from './users/reducer';
import auth from './auth/reducer';

export default combineReducers({
  book,
  user,
  auth
});