const isError = state => state.favorites.error;
const isLoading = state => state.favorites.loading;
const isEmpty = state => state.favorites.ids.length === 0;
const getTotalPages = state => state.favorites.total_results;
const getCurrentPage = state => state.favorites.current_page;

export { getCurrentPage, isError, isLoading, isEmpty, getTotalPages };
