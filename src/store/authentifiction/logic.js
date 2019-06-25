/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import { createLogic } from 'redux-logic';
import { authLogout, authSuccess, authError } from './actions';

import { toStorage } from '../../helpers/helpers';

// LOGIC FOR AUTHENTIFICATE USER
export const authUserLogic = createLogic({
  type: 'AUTH_REQUEST',
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

      dispatch(authSuccess({ username, sessionId: session_id }));

      toStorage('SESSION_ID', session_id);
      toStorage('USERNAME', username);
    } catch (err) {
      console.log(err);
      dispatch(authError());
    }
    done();
  },
});

// LOGIC FOR LOGOUT
export const userLogoutLogic = createLogic({
  type: 'AUTH_LOGOUT',
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
      dispatch(authLogout());
      localStorage.clear();
    } catch (err) {
      console.log(err);
    }

    done();
  },
});
