/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import axios from 'axios';

// ASYNC AWAIT SESSION ID
/*
const authentification = async (
  reqTokenPath,
  verifyPath,
  username,
  password,
  sessionPath,
) => {
  const requestToken = await axios(reqTokenPath).then(
    ({ data }) => data.request_token,
  );
  console.log(requestToken);

  const verifiedToken = await axios
    .post(verifyPath, {
      username,
      password,
      request_token: requestToken,
    })
    .then(({ data }) => data.request_token);

  const sessionId = await axios
    .post(sessionPath, { request_token: verifiedToken })
    .then(({ data }) => data.session_id);

  console.log(sessionId);
};
*/

const newRequestToken = reqTokenPath => {
  axios(reqTokenPath).then(({ data }) =>
    localStorage.setItem('REQUEST_TOKEN', JSON.stringify(data.request_token)),
  );
};

const authentification = (
  tokenPath,
  username,
  password,
  sessionPath,
) => dispatch => {
  axios
    .post(tokenPath, {
      username,
      password,
      request_token: JSON.parse(localStorage.getItem('REQUEST_TOKEN')),
    })
    .then(({ data }) => {
      axios
        .post(sessionPath, { request_token: data.request_token })
        .then(({ data }) => {
          dispatch({
            type: 'SET_SESSION_ID',
            payload: data.session_id,
          });
          dispatch({
            type: 'GET_USERLOGIN',
            payload: username,
          });

          localStorage.setItem('SESSION_ID', JSON.stringify(data.session_id));
          localStorage.setItem('USERNAME', JSON.stringify(username));
        })
        .catch(() => alert('Bad token !!!'));
    })
    .catch(err => console.log(err));
};

const userLogout = (deletePath, sessionId) => dispatch => {
  axios
    .delete(deletePath, {
      data: {
        session_id: sessionId,
      },
    })
    .then(() => {
      dispatch({
        type: 'DELETE_SESSION_ID',
      });
      localStorage.clear();
    })
    .catch(err => console.log(err));
};

export { authentification, newRequestToken, userLogout };
