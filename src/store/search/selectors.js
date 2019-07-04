const isError = state => state.search.error;
const isLoading = state => state.search.loading;
const isEmpty = state => state.search.ids === 0;
const getQuery = state => state.search.query;
const getTotalResults = state => state.search.total_results;
const getCurrentPage = state => state.search.page;

export {
  isError,
  isLoading,
  isEmpty,
  getTotalResults,
  getQuery,
  getCurrentPage,
};
