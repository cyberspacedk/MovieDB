const fetchDataRequest = () => ({ type: 'FETCH_REQUEST' });

const fetchDataError = () => ({
  type: 'FETCH_ERROR',
});

const fetchDataSuccess = data => ({
  type: 'FETCH_RESPONSE',
  payload: data,
});

export { fetchDataRequest, fetchDataError, fetchDataSuccess };
