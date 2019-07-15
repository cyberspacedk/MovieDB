import reducer from '../reducers';

describe('reducers', () => {
  it('should set loading field to true', () => {
    const action = {
      type: 'FETCH_REQUEST',
    };
    const state = {
      loading: false,
    };
    expect(reducer(state, action)).toEqual({
      loading: true,
    });
  });

  it('should set error field to error message', () => {
    const action = {
      type: 'FETCH_ERROR',
      payload: 'error message',
    };
    const state = {
      loading: true,
      error: false,
    };
    expect(reducer(state, action)).toEqual({
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
      loading: true,
      ids: [],
    };
    expect(reducer(state, action)).toEqual({
      loading: false,
      ids: [1, 2, 3],
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      ids: [],
      loading: false,
      error: false,
    });
  });
});
