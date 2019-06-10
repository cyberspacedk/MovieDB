const getTopFilmsSelector = state => state.topFilms.films;

const isloading = state => state.topFilms.loading;

const isError = state => state.topFilms.error;

export { getTopFilmsSelector, isloading, isError };
