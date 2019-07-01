import singleFilmLogic from './singleFilm/logic';
import getTopFilmsLogic from './trendingMovies/logic';
import { authUserLogic, userLogoutLogic } from './authentifiction/logic';
import searchFilmsLogic from './search/logic';
import {
  createListLogic,
  getCreatedListLogic,
  deleteCreatedListLogic,
  addMovieToListLogic,
} from './myLists/logic';
import getListDetailsLogic from './listDetails/logic';
import { operationsFavoriteLogic, getFavoritesLogic } from './favorites/logic';
import { operationWatchListLogic, getWatchListLogic } from './watchList/logic';

export default [
  getTopFilmsLogic,
  authUserLogic,
  userLogoutLogic,
  searchFilmsLogic,
  singleFilmLogic,
  createListLogic,
  getCreatedListLogic,
  getListDetailsLogic,
  deleteCreatedListLogic,
  addMovieToListLogic,
  operationsFavoriteLogic,
  getFavoritesLogic,
  operationWatchListLogic,
  getWatchListLogic,
];
