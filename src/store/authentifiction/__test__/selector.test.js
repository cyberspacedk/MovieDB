import { isAuthentificated, getUserLogin, isFailAuth } from '../selectors';

describe('Auth: selector', () => {
  const state = {
    user: {
      username: 'fakeuser',
      sessionId: '12345',
      failAuth: false,
    },
  };

  describe('session id exist', () => {
    it('returns true', () => {
      expect(isAuthentificated(state)).toBeTruthy();
    });
  });

  describe('grab username', () => {
    it('returns username', () => {
      expect(getUserLogin(state)).toEqual('fakeuser');
    });
  });

  describe('grab auth status', () => {
    it('returns is username auth ', () => {
      expect(isFailAuth(state)).toBeFalsy();
    });
  });
});
