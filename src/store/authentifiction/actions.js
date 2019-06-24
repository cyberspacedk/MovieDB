const authRequest = ({ username, password }) => ({
  type: 'AUTH_REQUEST',
  payload: {
    username,
    password,
  },
});

const authSuccess = userData => ({ type: 'AUTH_SUCCESS', payload: userData });

const authError = () => ({ type: 'AUTH_ERROR' });

const authLogout = () => ({ type: 'AUTH_LOGOUT' });

const tryAgain = () => ({
  type: 'TRY_AGAIN',
});

export { authLogout, authRequest, authSuccess, authError, tryAgain };
