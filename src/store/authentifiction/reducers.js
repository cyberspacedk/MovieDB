import Cookies from 'js-cookie';

export const initialState = {
  username: Cookies.get('USERNAME') || '',
  sessionId: Cookies.get('SESSION_ID') || '',
  failAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        username: payload.username,
        sessionId: payload.sessionId,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        username: '',
        sessionId: '',
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        failAuth: true,
      };
    case 'TRY_AGAIN':
      return {
        ...state,
        failAuth: false,
      };

    default:
      return state;
  }
};
