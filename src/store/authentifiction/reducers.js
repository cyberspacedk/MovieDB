import { fromStorage } from '../../helpers';

export const initialState = {
  username: fromStorage('USERNAME') || '',
  sessionId: fromStorage('SESSION_ID') || '',
  failAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        username: payload.username,
        sessionId: payload.sessionId,
        failAuth: false,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        username: '',
        sessionId: '',
        failAuth: false,
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
