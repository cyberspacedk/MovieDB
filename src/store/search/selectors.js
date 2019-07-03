const isError = state => state.search.error;
const isLoading = state => state.search.loading;
const isEmpty = state => state.search.response.results.length === 0;
const getQuery = state => state.search.query;
const getSearchResponse = state => state.search.response.results;
const getTotalResults = state => state.search.response.total_results;
const getCurrentPage = state => state.search.response.page;

export {
  isError,
  isLoading,
  isEmpty,
  getSearchResponse,
  getTotalResults,
  getQuery,
  getCurrentPage,
};
