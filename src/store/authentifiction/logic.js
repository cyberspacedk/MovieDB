/* eslint-disable no-console */
/* eslint-disable camelcase */
import { createLogic } from 'redux-logic';
import Cookies from 'js-cookie';
import { authLogout, authSuccess, authError } from './actions';
import { API } from '../../api';

export const authUserLogic = createLogic({
  type: 'AUTH_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    try {
      const {
        data: { request_token },
      } = await httpClient.get(`authentication/token/new?api_key=${API}`);
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
      Cookies.set('SESSION_ID', session_id);
      Cookies.set('USERNAME', username);
    } catch (err) {
      dispatch(authError());
    }
    done();
  },
});

export const userLogoutLogic = createLogic({
  type: 'AUTH_LOGOUT',
  throttle: 10000,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    try {
      const SSID = Cookies.get('SESSION_ID');
      await httpClient.delete(
        `authentication/session?api_key=2452661f8c986fe61a12ec7532335900`,
        {
          data: {
            session_id: SSID,
          },
        },
      );
      dispatch(authLogout());
      Cookies.remove('SESSION_ID');
      Cookies.remove('USERNAME');
    } catch (err) {
      console.log(err);
    }
    done();
  },
});
