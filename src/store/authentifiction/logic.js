import { createLogic } from 'redux-logic';
import {
  DELETE_SESSION_ID_PATH,
  REQUEST_TOKEN_PATH,
  GET_SESSION_ID_LOGIN_PATH,
  GET_SESSION_ID_PATH,
} from '../../api';
import { userLogout, setSessionId, setUserLogin } from './actions';

// LOGIC FOR AUTHENTIFICATE USER
export const authUserLogic = createLogic({
  type: 'AUTH_USER',
  cancelType: '',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    try {
      const requestToken = await httpClient
        .get(REQUEST_TOKEN_PATH)
        .then(({ data }) => data.request_token);

      const { username, password } = action.payload;

      const verifiedToken = await httpClient
        .post(GET_SESSION_ID_LOGIN_PATH, {
          username,
          password,
          request_token: requestToken,
        })
        .then(({ data }) => data.request_token);

      const sessionId = await httpClient
        .post(GET_SESSION_ID_PATH, {
          request_token: verifiedToken,
        })
        .then(({ data }) => data.session_id);

      dispatch(setSessionId(sessionId));
      dispatch(setUserLogin(username));

      localStorage.setItem('SESSION_ID', JSON.stringify(sessionId));
      localStorage.setItem('USERNAME', JSON.stringify(username));
    } catch (err) {
      console.log(err);
    }
    done();
  },
});

// LOGIC FOR LOGOUT
export const userLogoutLogic = createLogic({
  type: 'DELETE_SESSION_ID',
  cancelType: '',
  latest: true,

  process({ httpClient }, dispatch, done) {
    httpClient
      .delete(DELETE_SESSION_ID_PATH, {
        data: {
          session_id: JSON.parse(localStorage.getItem('SESSION_ID')),
        },
      })
      .then(() => {
        dispatch(userLogout());
        localStorage.clear();
      })
      .catch(err => console.log(err));
    done();
  },
});
