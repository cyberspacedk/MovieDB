const isError = state => state.watchlist.error;
const isLoading = state => state.watchlist.loading;
const isEmpty = state => state.watchlist.ids.length === 0;
const getTotalPages = state => state.watchlist.total_results;
const getCurrentPage = state => state.watchlist.current_page;

export { getCurrentPage, isError, isLoading, isEmpty, getTotalPages };
