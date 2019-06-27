const getTopFilmsSelector = state => state.trendingMovies.films;
const isloading = state => state.trendingMovies.loading;
const isError = state => state.trendingMovies.error;
const isEmpty = state => state.trendingMovies.films.length === 0;

export { getTopFilmsSelector, isloading, isError, isEmpty };
