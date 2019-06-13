/* eslint-disable camelcase */
import { createLogic } from 'redux-logic';
import { userLogout, setUserData } from './actions';

// LOGIC FOR AUTHENTIFICATE USER
export const authUserLogic = createLogic({
  type: 'AUTH_USER',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    try {
      const {
        data: { request_token },
      } = await httpClient.get(
        `authentication/token/new${httpClient.defaults.params.apiKey}`,
      );
      const { username, password } = action.payload;

      await httpClient.post(
        `authentication/token/validate_with_login${
          httpClient.defaults.params.apiKey
        }`,
        {
          username,
          password,
          request_token,
        },
      );

      const {
        data: { session_id },
      } = await httpClient.post(
        `authentication/session/new${httpClient.defaults.params.apiKey}`,
        {
          request_token,
        },
      );

      dispatch(setUserData({ username, sessionId: session_id }));

      localStorage.setItem('SESSION_ID', JSON.stringify(session_id));
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
  latest: true,

  async process({ httpClient }, dispatch, done) {
    try {
      await httpClient.delete(
        `authentication/session${httpClient.defaults.params.apiKey}`,
        {
          data: {
            session_id: JSON.parse(localStorage.getItem('SESSION_ID')),
          },
        },
      );
      dispatch(userLogout());
      localStorage.clear();
    } catch (err) {
      console.log(err);
    }

    done();
  },
});
