/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import { createLogic } from 'redux-logic';
import { userLogout, setUserData } from './actions';

// LOGIC FOR AUTHENTIFICATE USER
export const authUserLogic = createLogic({
  type: 'AUTH_USER',
  latest: true,

  async process({ httpClient, getState, action }, dispatch, done) {
    try {
      const {
        data: { request_token },
      } = await httpClient.get(
        `authentication/token/new?api_key=2452661f8c986fe61a12ec7532335900`,
      );
      const { username, password } = action.payload;

      await httpClient.post(
        `authentication/token/validate_with_login?api_key=2452661f8c986fe61a12ec7532335900`,
        {
          username,
          password,
          request_token,
        },
      );

      const {
        data: { session_id },
      } = await httpClient.post(
        `authentication/session/new?api_key=2452661f8c986fe61a12ec7532335900`,
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
        `authentication/session?api_key=2452661f8c986fe61a12ec7532335900`,
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
