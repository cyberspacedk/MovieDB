import singleFilmLogic from './singleFilm/logic';
import getTopFilmsLogic from './trendingMovies/logic';
import { authUserLogic, userLogoutLogic } from './authentifiction/logic';
import searchFilmsLogic from './search/logic';
import createListLogic from './myLists/logic';
import { operationsFavoriteLogic, getFavoritesLogic } from './favorites/logic';
import { operationWatchListLogic, getWatchListLogic } from './watchList/logic';

export default [
  getTopFilmsLogic,
  authUserLogic,
  userLogoutLogic,
  searchFilmsLogic,
  singleFilmLogic,
  createListLogic,
  operationsFavoriteLogic,
  getFavoritesLogic,
  operationWatchListLogic,
  getWatchListLogic,
];
