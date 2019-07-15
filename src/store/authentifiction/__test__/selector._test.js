import { isAuthentificated, getUserLogin } from '../selectors';

describe('topfilms selector', () => {
  const state = {
    user: {
      username: 'fakeuser',
      sessionId: '12345',
    },
  };
  describe('session id exist', () => {
    it('returns true', () => {
      expect(isAuthentificated(state)).toBeTruthy();
    });
  });

  describe("session id doesn't exist", () => {
    it('returns false', () => {
      expect(isAuthentificated({})).toBeFalsy();
    });
  });

  describe('grab username', () => {
    it('returns username', () => {
      expect(getUserLogin(state)).toEqual(state.user.username);
    });
  });
});
