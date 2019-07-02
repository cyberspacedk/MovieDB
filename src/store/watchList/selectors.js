const getWatchList = state => state.watchlist.watchlist_list;
const isError = state => state.watchlist.error;
const isLoading = state => state.watchlist.loading;
const isEmpty = state => state.watchlist.watchlist_list.length === 0;
const getTotalPages = state => state.watchlist.total_results;

export { getWatchList, isError, isLoading, isEmpty, getTotalPages };
