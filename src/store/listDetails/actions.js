const getCreatedListError = () => ({
  type: 'GET_LIST_DETAILS_ERROR',
});

const getListDetailsRequest = listId => ({
  type: 'GET_LIST_DETAILS_REQUEST',
  payload: listId,
});

const getListDetailsResponse = listDetails => ({
  type: 'GET_LIST_DETAILS_RESPONSE',
  payload: listDetails,
});
export { getCreatedListError, getListDetailsRequest, getListDetailsResponse };
