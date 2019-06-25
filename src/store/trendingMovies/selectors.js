const getTopFilmsSelector = state => state.trendingMovies.films;

const isloading = state => state.trendingMovies.loading;

const isError = state => state.trendingMovies.error;

export { getTopFilmsSelector, isloading, isError };
