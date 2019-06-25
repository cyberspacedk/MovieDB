const createListRequest = (name, description) => ({
  type: 'CREATE_LIST_REQUEST',
  payload: { name, description },
});

export default createListRequest;
