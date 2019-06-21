const isError = state => state.search.error;
const isLoading = state => state.search.loading;
const searchResponse = state => state.search.response.results || false;
const isEmptyResponse = state => state.search.response.total_results === 0;
const totalResults = state => state.search.response.total_results || false;

export { isError, isLoading, searchResponse, isEmptyResponse, totalResults };
