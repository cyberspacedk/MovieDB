const fetchDataRequest = () => ({ type: 'FETCH_REQUEST' });

const fetchDataError = error => ({
  type: 'FETCH_ERROR',
  payload: error,
});

const fetchDataSuccess = data => ({
  type: 'FETCH_RESPONSE',
  payload: data,
});

export { fetchDataRequest, fetchDataError, fetchDataSuccess };
