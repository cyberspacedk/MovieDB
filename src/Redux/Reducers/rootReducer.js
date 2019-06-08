import { combineReducers } from 'redux';
import topFilmsReducer from './topFilmsReducer';
import setUserDataReducer from './setUserDataReducer';

const rootReducer = combineReducers({
  topFilms: topFilmsReducer,
  user: setUserDataReducer,
});

export default rootReducer;
