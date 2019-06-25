const searchRequest = (query, page = 1) => ({
  type: 'SEARCH_REQUEST',
  payload: query,
  page,
});

const searchError = () => ({ type: 'SEARCH_ERROR' });

const searchSuccess = data => ({
  type: 'SEARCH_RESPONSE',
  payload: data,
});

export { searchRequest, searchError, searchSuccess };
