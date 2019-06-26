const getWatchList = state => state.watchlist.watchlist_list;
const isError = state => state.watchlist.error;
const isLoading = state => state.watchlist.loading;
const getTotalPages = state => state.watchlist.total_pages;
const getCurrentPage = state => state.watchlist.current_page;

export { getWatchList, isError, isLoading, getCurrentPage, getTotalPages };
