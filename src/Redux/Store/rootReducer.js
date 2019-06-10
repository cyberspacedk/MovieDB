import { combineReducers } from 'redux';
import topFilmsReducer from './getTopChart/reducers';
import setUserDataReducer from './authentifiction/reducers';

const rootReducer = combineReducers({
  topFilms: topFilmsReducer,
  user: setUserDataReducer,
});

export default rootReducer;
