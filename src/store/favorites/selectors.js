const getFavoritesList = state => state.favorites.favorites_list;
const isError = state => state.favorites.error;
const isLoading = state => state.favorites.loading;
const getTotalPages = state => state.favorites.total_pages;
const isEmpty = state => !!state.favorites.favorites_list;

export { getFavoritesList, isError, isLoading, isEmpty, getTotalPages };
