import reducer, { initialState } from '../reducers';

describe('Auth: reducers', () => {
  it('should return username and sessionId', () => {
    const action = {
      type: 'AUTH_SUCCESS',
      payload: { username: 'fakeuser', sessionId: '53623g4jgfsusilss' },
    };

    const state = {
      ...initialState,
      username: '',
      sessionId: '',
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      username: 'fakeuser',
      sessionId: '53623g4jgfsusilss',
    });
  });

  it('should delete username and sessionId', () => {
    const action = {
      type: 'AUTH_LOGOUT',
    };
    const state = {
      ...initialState,
      username: 'fakeuser',
      sessionId: '53623g4jgfsusilss',
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      username: '',
      sessionId: '',
    });
  });

  it('should set fail auth', () => {
    const action = {
      type: 'AUTH_ERROR',
    };
    const state = {
      ...initialState,
      failAuth: false,
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      failAuth: true,
    });
  });

  it('should set fail auth back to false', () => {
    const action = {
      type: 'TRY_AGAIN',
    };
    const state = {
      ...initialState,
      failAuth: true,
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      failAuth: false,
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      ...initialState,
    });
  });
});
