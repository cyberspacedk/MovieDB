const isError = state => state.search.error;
const isLoading = state => state.search.loading;
const isEmpty = state => state.search.response.results.length === 0;
const getQuery = state => state.search.query;
const searchResponse = state => state.search.response.results || false;
const totalResults = state => state.search.response.total_results || false;

export { isError, isLoading, isEmpty, searchResponse, totalResults, getQuery };
