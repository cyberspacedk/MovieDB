import { combineReducers } from 'redux';
import topFilmsReducer from './trendingMovies/reducers';
import setUserDataReducer from './authentifiction/reducers';
import searchFilmsReducer from './search/reducers';
import singleFilmReducer from './singleFilm/reducers';
import favoritesListReducer from './favorites/reducers';
import watchListReducer from './watchList/reducers';
import myListsReducer from './myLists/reducers';
import listDetailsReducer from './listDetails/reducers';

const rootReducer = combineReducers({
  trendingMovies: topFilmsReducer,
  user: setUserDataReducer,
  search: searchFilmsReducer,
  singleFilm: singleFilmReducer,
  myLists: myListsReducer,
  listDetails: listDetailsReducer,
  favorites: favoritesListReducer,
  watchlist: watchListReducer,
});

export default rootReducer;
