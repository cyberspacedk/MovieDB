const searchRequest = query => ({ type: 'SEARCH_REQUEST', payload: query });

const searchError = () => ({ type: 'SEARCH_ERROR' });

const searchSuccess = data => ({
  type: 'SEARCH_RESPONSE',
  payload: data,
});

export { searchRequest, searchError, searchSuccess };
