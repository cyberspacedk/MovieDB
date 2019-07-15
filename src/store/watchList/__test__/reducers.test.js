import reducer from '../reducers';

describe('Watchlist: reducers', () => {
  it('should set loading field to true', () => {
    const action = {
      type: 'GET_WATCHLIST_REQUEST',
    };
    const state = {
      loading: false,
    };
    expect(reducer(state, action)).toEqual({
      loading: true,
    });
  });

  it('should return response', () => {
    const action = {
      type: 'GET_WATCHLIST_RESPONSE',
      payload: {
        ids: [1, 2, 3],
        total_results: 3,
        current_page: 2,
      },
    };
    const state = {
      ids: [],
      total_results: 0,
      current_page: 0,
      loading: true,
      error: false,
    };
    expect(reducer(state, action)).toEqual({
      ids: [1, 2, 3],
      total_results: 3,
      current_page: 2,
      loading: false,
      error: false,
    });
  });

  it('should set error to true', () => {
    const action = {
      type: 'GET_WATCHLIST_ERROR',
    };
    const state = {
      loading: true,
      error: false,
    };
    expect(reducer(state, action)).toEqual({
      error: true,
      loading: false,
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      ids: [],
      total_results: 0,
      current_page: 0,
      loading: false,
      error: false,
    });
  });
});
