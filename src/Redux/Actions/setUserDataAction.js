/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
import axios from 'axios';

const authSessionId = session => ({
  type: 'SET_SESSION_ID',
  payload: session,
});

const deleteSessionId = () => ({
  type: 'DELETE_SESSION_ID',
});

export const sendDataForCheck = (
  tokenPath,
  login,
  pass,
  reqToken,
  sessionPath,
) => dispatch => {
  axios
    .post(tokenPath, {
      username: login,
      password: pass,
      request_token: reqToken,
    })
    .then(({ data }) => {
      axios
        .post(sessionPath, {
          request_token: data.request_token,
        })
        .then(({ data }) => {
          dispatch(authSessionId(data.session_id));
          localStorage.setItem('SESSION_ID', JSON.stringify(data.session_id));
        })
        .catch(() => alert('Bad token !!!'));
    })
    .catch(err => console.log(err));
};

export const userLogout = (deletePath, sessionId) => dispatch => {
  axios
    .delete(deletePath, {
      data: {
        session_id: sessionId,
      },
    })
    .then(() => {
      dispatch(deleteSessionId());
      localStorage.removeItem('SESSION_ID');
      localStorage.removeItem('REQUEST_TOKEN');
    })
    .catch(err => console.log(err));
};

export const newRequestToken = reqTokenPath => dispatch => {
  axios(reqTokenPath).then(({ data }) =>
    localStorage.setItem('REQUEST_TOKEN', JSON.stringify(data.request_token)),
  );
};
