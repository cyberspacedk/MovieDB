import { combineReducers } from 'redux';
import topFilmsReducer from './trendingMovies/reducers';
import setUserDataReducer from './authentifiction/reducers';
import searchFilmsReducer from './search/reducers';
import singleFilmReducer from './singleFilm/reducers';
import favoritesListReducer from './favorites/reducers';

const rootReducer = combineReducers({
  trendingMovies: topFilmsReducer,
  user: setUserDataReducer,
  search: searchFilmsReducer,
  singleFilm: singleFilmReducer,
  favorites: favoritesListReducer,
});

export default rootReducer;
