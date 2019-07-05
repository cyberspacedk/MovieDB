const isError = state => state.search.error;
const isLoading = state => state.search.loading;
const isEmpty = state => state.search.ids === 0;
const getQuery = state => state.search.query;
const getTotalResults = state => state.search.total_results;
const getCurrentPage = state => state.search.page;

const getSearched = state => {
  const { ids } = state.search;
  const { movies } = state.database;
  return ids.map(id => movies[id]);
};

export {
  isError,
  isLoading,
  isEmpty,
  getTotalResults,
  getQuery,
  getCurrentPage,
  getSearched,
};
