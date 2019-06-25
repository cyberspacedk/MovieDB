const getFavoritesList = state => state.favorites.favorites_list;
const isError = state => state.favorites.error;
const isLoading = state => state.favorites.loading;

export { getFavoritesList, isError, isLoading };
