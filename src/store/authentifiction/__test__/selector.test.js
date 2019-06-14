import { isAuthentificated, getUserLogin } from '../selectors';

describe('topfilms selector', () => {
  const state = {
    user: {
      username: 'fakeuser',
      sessionId: '12345',
    },
  };

  it('returns sessionId', () => {
    expect(isAuthentificated(state)).toEqual(!!state.user.sessionId);
  });

  it('returns username', () => {
    expect(getUserLogin(state)).toEqual(state.user.username);
  });
});
