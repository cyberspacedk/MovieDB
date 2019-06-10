import axios from 'axios';

const getUserLogin = login => ({
  type: 'GET_USERLOGIN',
  payload: login,
});

const authSessionId = session => ({
  type: 'SET_SESSION_ID',
  payload: session,
});

const deleteSessionId = () => ({
  type: 'DELETE_SESSION_ID',
});

const sendDataForCheck = (
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
        // eslint-disable-next-line no-shadow
        .then(({ data }) => {
          dispatch(getUserLogin(login));
          dispatch(authSessionId(data.session_id));
          localStorage.setItem('SESSION_ID', JSON.stringify(data.session_id));
          localStorage.setItem('USERNAME', JSON.stringify(login));
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
      dispatch(deleteSessionId());
      localStorage.removeItem('SESSION_ID');
      localStorage.removeItem('REQUEST_TOKEN');
    })
    .catch(err => console.log(err));
};

const newRequestToken = reqTokenPath => () => {
  axios(reqTokenPath).then(({ data }) =>
    localStorage.setItem('REQUEST_TOKEN', JSON.stringify(data.request_token)),
  );
};

export { sendDataForCheck, userLogout, newRequestToken };
