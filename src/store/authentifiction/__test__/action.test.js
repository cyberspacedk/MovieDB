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

  it('should deliver userData for request ', () => {
    const userData = {
      username: 'fakeuser',
      password: '53623g4jgfsusilss',
    };

    const expectedAction = {
      type: 'AUTH_REQUEST',
      payload: {
        username: 'fakeuser',
        password: '53623g4jgfsusilss',
      },
    };
    expect(authRequest(userData)).toEqual(expectedAction);
  });

  it('should return userData. response from server', () => {
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
