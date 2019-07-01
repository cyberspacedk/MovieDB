const getListDetails = state => state.listDetails.list_details;
const isError = state => state.listDetails.error;
const isLoading = state => state.listDetails.loading;
const isEmpty = state => state.listDetails.list_details.length === 0;
const getListName = state => state.listDetails.list_name;

export { getListDetails, isError, isLoading, isEmpty, getListName };
