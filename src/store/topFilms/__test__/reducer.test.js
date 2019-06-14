import reducer, { initialState } from '../reducers';

describe('TOPFILMS REDUCER', () => {
  it('FETCH_REQUEST', () => {
    const action = {
      type: 'FETCH_REQUEST',
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('FETCH_ERROR', () => {
    const action = {
      type: 'FETCH_ERROR',
      payload: 'error message',
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error: action.payload,
    });
  });

  it('FETCH_RESPONSE', () => {
    const action = {
      type: 'FETCH_RESPONSE',
      payload: [{}],
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      films: action.payload,
    });
  });
});
