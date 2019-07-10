import reducer, { initialState } from '../reducers';

describe('Watchlist: reducers', () => {
  it('should set loading field to true', () => {
    const action = {
      type: 'GET_WATCHLIST_REQUEST',
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
      error: false,
    });
  });

  it('should return response', () => {
    const action = {
      type: 'GET_WATCHLIST_RESPONSE',
      payload: {
        ids: [1, 2, 3],
        total_results: 3,
        current_page: 2,
        loading: false,
        error: false,
      },
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      ...action.payload,
    });
  });

  it('should set error to true', () => {
    const action = {
      type: 'GET_WATCHLIST_ERROR',
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error: true,
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
