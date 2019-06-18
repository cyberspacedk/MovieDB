import { isAuthentificated, getUserLogin } from '../selectors';

describe('topfilms selector', () => {
  describe('session id exist', () => {
    const state = {
      user: {
        username: 'fakeuser',
        sessionId: '12345',
      },
    };

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
      const state = {
        user: {
          username: 'fakeuser',
          sessionId: '12345',
        },
      };

      expect(getUserLogin(state)).toEqual(state.user.username);
    });
  });
});
