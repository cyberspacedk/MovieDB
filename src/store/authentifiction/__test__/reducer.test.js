import reducer, { initialState } from '../reducers';

describe('AUTHENTIFICATION REDUCER', () => {
  it('SET_USER_DATA', () => {
    const action = {
      type: 'SET_USER_DATA',
      payload: { username: 'fakeuser', sessionId: '53623g4jgfsusilss' },
    };
    expect(reducer(initialState, action)).toEqual({
      username: 'fakeuser',
      sessionId: '53623g4jgfsusilss',
    });
  });

  it('DELETE_SESSION_ID', () => {
    const action = {
      type: 'DELETE_SESSION_ID',
      payload: { username: '', sessionId: '' },
    };
    expect(reducer(initialState, action)).toEqual({
      username: '',
      sessionId: '',
    });
  });
});
