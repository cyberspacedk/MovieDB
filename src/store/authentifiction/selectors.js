const isAuthentificated = state => !!state.user.sessionId;
const isFailAuth = state => state.user.failAuth;
const getUserLogin = state => state.user.username;

export { isAuthentificated, getUserLogin, isFailAuth };
