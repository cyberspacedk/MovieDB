const userLogout = () => ({ type: 'DELETE_SESSION_ID' });

const authUser = userData => ({ type: 'AUTH_USER', payload: userData });

const setSessionId = sid => ({ type: 'SET_SESSION_ID', payload: sid });

const setUserLogin = username => ({ type: 'SET_USERLOGIN', payload: username });

export { userLogout, authUser, setSessionId, setUserLogin };
