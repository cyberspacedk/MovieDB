const userLogout = () => ({ type: 'DELETE_SESSION_ID' });

const authUser = ({ username, password }) => ({
  type: 'AUTH_USER',
  payload: {
    username,
    password,
  },
});

const setUserData = userData => ({ type: 'SET_USER_DATA', payload: userData });

export { userLogout, authUser, setUserData };
