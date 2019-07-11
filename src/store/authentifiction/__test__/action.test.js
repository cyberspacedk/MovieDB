import {
  authLogout,
  authRequest,
  authSuccess,
  authError,
  tryAgain,
} from '../actions';

describe('Auth: actions', () => {
  it("should return - type:'AUTH_LOGOUT'", () => {
    const expectedAction = {
      type: 'AUTH_LOGOUT',
    };
    expect(authLogout()).toEqual(expectedAction);
  });

  it('should return userData from form', () => {
    const username = 'fakeuser';
    const password = '12345';

    const expectedAction = {
      type: 'AUTH_REQUEST',
      payload: { username, password },
    };
    expect(authRequest({ username, password })).toEqual(expectedAction);
  });

  it('should return userData for setting in store', () => {
    const userData = {
      username: 'fakeuser',
      sessionId: '53623g4jgfsusilss',
    };
    const expectedAction = {
      type: 'AUTH_SUCCESS',
      payload: userData,
    };
    expect(authSuccess(userData)).toEqual(expectedAction);
  });

  it("should return - type:'AUTH_ERROR'", () => {
    const expectedAction = {
      type: 'AUTH_ERROR',
    };
    expect(authError()).toEqual(expectedAction);
  });

  it("should return - type:'TRY_AGAIN'", () => {
    const expectedAction = {
      type: 'TRY_AGAIN',
    };
    expect(tryAgain()).toEqual(expectedAction);
  });
});
