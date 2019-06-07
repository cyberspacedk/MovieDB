import { combineReducers } from 'redux';
import topFilmsReducer from './topFilmsReducer';
import getTokenReducer from './getTokenReducer';
import getSessionReducer from './getSessionIdReducer';

const rootReducer = combineReducers({
  topFilms: topFilmsReducer,
  requestToken: getTokenReducer,
  sessionID: getSessionReducer,
});

export default rootReducer;
