const createListRequest = (name, description) => ({
  type: 'CREATE_LIST_REQUEST',
  payload: { name, description },
});

const deleteListRequest = id => ({
  type: 'DELETE_LIST_REQUEST',
  payload: id,
});
const getCreatedListRequest = (page = 1) => ({
  type: 'GET_CREATED_LIST_REQUEST',
  payload: page,
});

const getCreatedListResponse = list => ({
  type: 'GET_CREATED_LIST_RESPONSE',
  payload: list,
});

const getCreatedListError = () => ({
  type: 'GET_CREATED_LIST_ERROR',
});

export {
  createListRequest,
  getCreatedListRequest,
  getCreatedListResponse,
  getCreatedListError,
  deleteListRequest,
};
