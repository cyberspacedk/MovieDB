/* eslint-disable no-unused-vars */
import axios from 'axios';

// GET REQUEST TOKEN ACTION
const getRequestToken = data => ({
  type: 'GET_REQ_TOKEN',
  payload: data,
});

// GET SESSION ACTION
const getSessionId = data => ({
  type: 'GET_SESSION_TOKEN',
  payload: data,
});

// GET REQUEST TOKEN
export const getNewRequestToken = path => dispatch => {
  axios.get(path).then(data => {
    const REQUEST_TOKEN = data.data.request_token;
    localStorage.setItem('REQUEST_TOKEN', JSON.stringify(REQUEST_TOKEN));
    dispatch(getRequestToken(REQUEST_TOKEN));
    window.location = `https://www.themoviedb.org/authenticate/${REQUEST_TOKEN}?redirect_to=http://localhost:3000`;
  });
};

//  GET SESSION ID
export const getNewSessionId = (path, token) => dispatch => {
  axios
    .post(path, {
      request_token: token,
    })
    .then(data => {
      const SESSION_ID = data.data.session_id;
      localStorage.setItem('SESSION_ID', JSON.stringify(SESSION_ID));
      dispatch(getSessionId(SESSION_ID));
    });
};
