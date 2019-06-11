export const fetchDataRequest = () => ({ type: 'FETCH_REQUEST' });

export const fetchDataCancel = () => ({ type: 'FETCH_CANCEL' });

export const fetchDataError = error => ({
  type: 'FETCH_ERROR',
  payload: error,
});

export const fetchDataSuccess = data => ({
  type: 'FETCH_RESPONSE',
  payload: data,
});
