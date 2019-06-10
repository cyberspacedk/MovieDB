import axios from 'axios';

const authentification = (
  reqTokenPath,
  verifyPath,
  username,
  password,
  sessionPath,
) => async dispatch => {
  const requestToken = await axios(reqTokenPath).then(
    ({ data }) => data.request_token,
  );

  const verifiedToken = await axios
    .post(verifyPath, {
      username,
      password,
      request_token: requestToken,
    })
    .then(({ data }) => data.request_token);

  const sessionId = await axios.post(sessionPath, {
    request_token: verifiedToken,
  });
  const { session_id: SID } = sessionId.data;

  dispatch({
    type: 'SET_SESSION_ID',
    payload: SID,
  });

  dispatch({
    type: 'GET_USERLOGIN',
    payload: username,
  });

  localStorage.setItem('SESSION_ID', JSON.stringify(SID));
  localStorage.setItem('USERNAME', JSON.stringify(username));
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

export { authentification, userLogout };
