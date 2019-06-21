const isError = state => state.singleFilm.loading;
const isLoading = state => state.singleFilm.error;

const aboutFilm = state => ({
  id: state.singleFilm.response.id,
  title: state.singleFilm.response.original_title,
  description: state.singleFilm.response.overview,
  language: state.singleFilm.response.original_language,
  runtime: state.singleFilm.response.runtime,
  budget: state.singleFilm.response.budget,
  revenue: state.singleFilm.response.revenue,
  genres: state.singleFilm.response.genres,
  image: state.singleFilm.response.backdrop_path,
});

export { isError, isLoading, aboutFilm };
