import { combineReducers } from 'redux';
import topFilmsReducer from './topFilms/reducers';
import setUserDataReducer from './authentifiction/reducers';
import searchFilmsReducer from './search/reducers';
import singleFilmReducer from './singleFilm/reducers';

const rootReducer = combineReducers({
  topFilms: topFilmsReducer,
  user: setUserDataReducer,
  search: searchFilmsReducer,
  singleFilm: singleFilmReducer,
});

export default rootReducer;
