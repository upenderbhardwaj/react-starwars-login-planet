import { combineReducers } from 'redux';
import { results } from './results';
import { planet } from './planet';
import { login } from './login';

export default combineReducers({
  results,
  planet,
  login
});
