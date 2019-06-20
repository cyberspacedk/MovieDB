const isError = state => state.search.error;
const isLoading = state => state.search.loading;
const searchResponse = state => state.search.response.results || false;
const isEmptyResponse = state => state.search.response.total_results === 0;
const totalPages = state => state.search.response.total_pages || false;

export { isError, isLoading, searchResponse, isEmptyResponse, totalPages };
