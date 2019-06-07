import axios from 'axios';

const fetchDataRequest = () => ({
  type: 'FETCH_REQUEST',
});

const fetchDataError = error => ({
  type: 'FETCH_ERROR',
  payload: error,
});

const fetchDataSuccess = data => ({
  type: 'FETCH_RESPONSE',
  payload: data,
});

const asyncDataAction = query => dispatch => {
  dispatch(fetchDataRequest());

  axios
    .get(query)
    .then(({ data }) => {
      dispatch(fetchDataSuccess(data));
      console.log(data);
    })
    .catch(err => dispatch(fetchDataError(err)));
};

export default asyncDataAction;
