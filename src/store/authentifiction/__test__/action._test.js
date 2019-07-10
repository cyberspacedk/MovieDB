/* import {
  authLogout,
  authRequest,
  authSuccess,
  authError,
  tryAgain,
} from '../actions';

describe('actions', () => {
  it("should return - type:'DELETE_SESSION_ID'", () => {
    const expectedAction = {
      type: 'DELETE_SESSION_ID',
    };
    expect(userLogout()).toEqual(expectedAction);
  });

  it('should return userData from form', () => {
    const username = 'fakeuser';
    const password = '12345';

    const expectedAction = {
      type: 'AUTH_USER',
      payload: { username, password },
    };
    expect(authUser({ username, password })).toEqual(expectedAction);
  });

  it('should return userData for setting in store', () => {
    const userData = {
      username: 'fakeuser',
      sessionId: '53623g4jgfsusilss',
    };
    const expectedAction = {
      type: 'SET_USER_DATA',
      payload: userData,
    };
    expect(setUserData(userData)).toEqual(expectedAction);
  });
});
 */
