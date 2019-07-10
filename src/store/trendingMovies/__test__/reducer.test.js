import reducer, { initialState } from '../reducers';

describe('reducers', () => {
  it('should set loading field to true', () => {
    const action = {
      type: 'FETCH_REQUEST',
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should set error field to error message', () => {
    const action = {
      type: 'FETCH_ERROR',
      payload: 'error message',
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error: action.payload,
    });
  });

  it('should set films field to response - films array', () => {
    const action = {
      type: 'FETCH_RESPONSE',
      payload: [1, 2, 3],
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      ids: action.payload,
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
