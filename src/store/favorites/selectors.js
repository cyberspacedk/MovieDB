const getFavoritesList = state => state.favorites.favorites_list;
const isError = state => state.favorites.error;
const isLoading = state => state.favorites.loading;
const getTotalPages = state => state.favorites.total_results;
const isEmpty = state => state.favorites.favorites_list.length === 0;

export { getFavoritesList, isError, isLoading, isEmpty, getTotalPages };
