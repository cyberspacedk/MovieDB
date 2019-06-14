import reducer, { initialState } from '../reducers';

describe('reducers', () => {
  it('should return username and sessionId', () => {
    const action = {
      type: 'SET_USER_DATA',
      payload: { username: 'fakeuser', sessionId: '53623g4jgfsusilss' },
    };

    expect(reducer(initialState, action)).toEqual({
      username: 'fakeuser',
      sessionId: '53623g4jgfsusilss',
    });
  });

  it('should delete username and sessionId', () => {
    const action = {
      type: 'DELETE_SESSION_ID',
      payload: { username: '', sessionId: '' },
    };
    expect(reducer(initialState, action)).toEqual({
      username: '',
      sessionId: '',
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      username: '',
      sessionId: '',
    });
  });
});
