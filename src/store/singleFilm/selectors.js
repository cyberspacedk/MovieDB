/* eslint-disable no-prototype-builtins */

const isError = state => state.singleFilm.error;
const isLoading = state => state.singleFilm.loading;

const getMovie = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return state.database.movies[id];
};

// eslint-disable-next-line consistent-return
const getGenres = (state, ownProps) => {
  const movie = getMovie(state, ownProps);
  if (movie && movie.genres !== undefined) {
    return movie.genres.map(id => state.database.genres[id]);
  }
};

export { isError, isLoading, getGenres, getMovie };
