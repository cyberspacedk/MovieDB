const isAuthentificated = state => !!(state.user && state.user.sessionId);

const getUserLogin = state => state.user.username;

export { isAuthentificated, getUserLogin };
