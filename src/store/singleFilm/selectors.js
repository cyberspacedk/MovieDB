/* eslint-disable consistent-return */
const isError = state => state.singleFilm.error;
const isLoading = state => state.singleFilm.loading;

const getImages = state => state.singleFilm.backdrops;
const getCasts = state => state.singleFilm.cast;
const getCrew = state => state.singleFilm.crew;

const getMovie = state => {
  const { id } = state.singleFilm;
  return state.database.movies[id];
};

const getGenres = state => {
  const { id } = state.singleFilm;
  if (state.database.movies[id] === undefined) return;
  const { genres } = state.database.movies[id];
  return genres.map(genre => state.database.genres[genre]);
};

export {
  isError,
  isLoading,
  getImages,
  getCasts,
  getCrew,
  getGenres,
  getMovie,
};
