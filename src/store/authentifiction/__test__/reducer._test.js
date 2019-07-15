import reducer from '../reducers';

describe('Auth: reducers', () => {
  it('should return username and sessionId', () => {
    const action = {
      type: 'AUTH_SUCCESS',
      payload: { username: 'fakeuser', sessionId: '53623g4jgfsusilss' },
    };

    const state = {
      username: '',
      sessionId: '',
    };

    expect(reducer(state, action)).toEqual({
      username: 'fakeuser',
      sessionId: '53623g4jgfsusilss',
    });
  });

  it('should delete username and sessionId', () => {
    const action = {
      type: 'AUTH_LOGOUT',
    };
    const state = {
      username: 'fakeuser',
      sessionId: '53623g4jgfsusilss',
    };
    expect(reducer(state, action)).toEqual({
      username: '',
      sessionId: '',
    });
  });

  it('should set fail auth', () => {
    const action = {
      type: 'AUTH_ERROR',
    };
    const state = {
      failAuth: false,
    };

    expect(reducer(state, action)).toEqual({
      failAuth: true,
    });
  });

  it('should set fail auth back to false', () => {
    const action = {
      type: 'TRY_AGAIN',
    };
    const state = {
      failAuth: true,
    };

    expect(reducer(state, action)).toEqual({
      failAuth: false,
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      username: '',
      sessionId: '',
      failAuth: false,
    });
  });
});
