import singleFilmLogic from './singleFilm/logic';
import getTopFilmsLogic from './trendingMovies/logic';
import { authUserLogic, userLogoutLogic } from './authentifiction/logic';
import searchFilmsLogic from './search/logic';
import createListLogic from './myLists/logic';
import { addToFavoriteLogic, getFavoritesLogic } from './favorites/logic';
import { addToWatchListLogic, getWatchListLogic } from './watchList/logic';

export default [
  getTopFilmsLogic,
  authUserLogic,
  userLogoutLogic,
  searchFilmsLogic,
  singleFilmLogic,
  createListLogic,
  addToFavoriteLogic,
  getFavoritesLogic,
  addToWatchListLogic,
  getWatchListLogic,
];
