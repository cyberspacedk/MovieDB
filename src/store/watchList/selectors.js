const getWatchList = state => state.watchlist.watchlist_list;
const isError = state => state.watchlist.error;
const isLoading = state => state.watchlist.loading;
const isEmpty = state => !!state.watchlist.watchlist_list;
const getTotalPages = state => state.watchlist.total_pages;

export { getWatchList, isError, isLoading, isEmpty, getTotalPages };
