import reducer, { initialState } from '../reducers';

describe('reducers', () => {
  it('should set loading field to true', () => {
    const action = {
      type: 'FETCH_REQUEST',
    };
    const state = {
      ...initialState,
      loading: false,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      loading: true,
    });
  });

  it('should set error field to error message', () => {
    const action = {
      type: 'FETCH_ERROR',
      payload: 'error message',
    };
    const state = {
      ...initialState,
      loading: true,
      error: false,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      loading: false,
      error: action.payload,
    });
  });

  it('should set films field to response - films array', () => {
    const action = {
      type: 'FETCH_RESPONSE',
      payload: [1, 2, 3],
    };
    const state = {
      ...initialState,
      loading: true,
      error: false,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      loading: false,
      ids: action.payload,
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
