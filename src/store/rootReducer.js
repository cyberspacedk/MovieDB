import { combineReducers } from 'redux';
import topFilmsReducer from './topFilms/reducers';
import setUserDataReducer from './authentifiction/reducers';
import searchFilmsReducer from './search/reducers';

const rootReducer = combineReducers({
  topFilms: topFilmsReducer,
  user: setUserDataReducer,
  search: searchFilmsReducer,
});

export default rootReducer;
