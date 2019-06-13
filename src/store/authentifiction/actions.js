const userLogout = () => ({ type: 'DELETE_SESSION_ID' });

const authUser = userData => ({
  type: 'AUTH_USER',
  payload: userData,
});

const setUserData = userData => ({ type: 'SET_USER_DATA', payload: userData });

export { userLogout, authUser, setUserData };
