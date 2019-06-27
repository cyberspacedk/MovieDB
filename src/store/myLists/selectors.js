const getMyList = state => state.myLists.lists;
const isError = state => state.myLists.error;
const isLoading = state => state.myLists.loading;
const getTotalPages = state => state.myLists.total_pages;

export { getMyList, isError, isLoading, getTotalPages };
