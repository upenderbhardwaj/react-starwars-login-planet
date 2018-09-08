import { combineReducers } from 'redux';
import films from './films';
import planets from './planets';

const rootReducer = combineReducers({
  planets,
  films,
});

export default rootReducer;
