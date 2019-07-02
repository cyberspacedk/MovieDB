const getMyList = state => state.myLists.lists;
const isError = state => state.myLists.error;
const isLoading = state => state.myLists.loading;
const getTotalPages = state => state.myLists.total_results;
const isEmpty = state => state.myLists.lists.length === 0;

export { getMyList, isError, isEmpty, isLoading, getTotalPages };
