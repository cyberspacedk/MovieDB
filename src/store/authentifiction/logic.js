import { createLogic } from 'redux-logic';
import { userLogout, setSessionId, setUserLogin } from './actions';

// LOGIC FOR AUTHENTIFICATE USER
export const authUserLogic = createLogic({
  type: 'AUTH_USER',
  cancelType: '',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    try {
      const requestToken = await httpClient.get(
        `authentication/token/new${httpClient.defaults.params.apiKey}`,
      );

      const { username, password } = action.payload;

      const verifiedToken = await httpClient.post(
        `authentication/token/validate_with_login${
          httpClient.defaults.params.apiKey
        }`,
        {
          username,
          password,
          request_token: requestToken.data.request_token,
        },
      );

      const sessionId = await httpClient.post(
        `authentication/session/new${httpClient.defaults.params.apiKey}`,
        {
          request_token: verifiedToken.data.request_token,
        },
      );

      dispatch(setSessionId(sessionId.data.session_id));
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
      .delete(`authentication/session${httpClient.defaults.params.apiKey}`, {
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
