const getCreatedListError = () => ({
  type: 'GET_LIST_DETAILS_ERROR',
});

const getListDetailsRequest = listId => ({
  type: 'GET_LIST_DETAILS_REQUEST',
  payload: listId,
});

const getListDetailsResponse = (listDetails, listName) => ({
  type: 'GET_LIST_DETAILS_RESPONSE',
  payload: { listDetails, listName },
});
export { getCreatedListError, getListDetailsRequest, getListDetailsResponse };
