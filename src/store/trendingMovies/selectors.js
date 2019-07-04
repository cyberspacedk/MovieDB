const isloading = state => state.trending.loading;
const isError = state => state.trending.error;
const isEmpty = state => state.trending.ids.length === 0;

export { isloading, isError, isEmpty };
