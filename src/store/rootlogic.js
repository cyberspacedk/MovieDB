import singleFilmLogic from './singleFilm/logic';
import getTopFilmsLogic from './trendingMovies/logic';
import { authUserLogic, userLogoutLogic } from './authentifiction/logic';
import searchFilmsLogic from './search/logic';

export default [
  getTopFilmsLogic,
  authUserLogic,
  userLogoutLogic,
  searchFilmsLogic,
  singleFilmLogic,
];
