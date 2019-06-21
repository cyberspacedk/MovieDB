const isError = state => state.singleFilm.loading;
const isLoading = state => state.singleFilm.error;

const getImages = state => state.singleFilm.response.backdrops;
const getCasts = state => state.singleFilm.response.cast;
const getCrew = state => state.singleFilm.response.crew;
const getGenres = state => state.singleFilm.response.genres;

const getFilmInfo = state => ({
  budget: state.singleFilm.response.budget,
  id: state.singleFilm.response.id,
  lang: state.singleFilm.response.original_language,
  runtime: state.singleFilm.response.runtime,
  title: state.singleFilm.response.original_title,
  overview: state.singleFilm.response.overview,
});

export {
  isError,
  isLoading,
  getImages,
  getCasts,
  getCrew,
  getGenres,
  getFilmInfo,
};
