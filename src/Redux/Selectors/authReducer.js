const isAuthentificated = state => state.user.sessionId;

const getUserLogin = state => state.user.username;

export { isAuthentificated, getUserLogin };
