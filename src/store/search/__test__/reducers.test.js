import reducer, { initialState } from '../reducers';

describe('Search: reducers', () => {
  it('should set field loading to true and store query', () => {
    const action = {
      type: 'SEARCH_REQUEST',
      payload: 'sport',
    };

    const state = {
      ...initialState,
      loading: false,
      query: '',
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      loading: true,
      query: 'sport',
    });
  });

  it('should store data', () => {
    const action = {
      type: 'SEARCH_RESPONSE',
      payload: {
        ids: 55,
        total_results: 3,
        page: 3,
      },
    };
    const state = {
      ...initialState,
      loading: true,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      loading: false,
      ids: 55,
      total_results: 3,
      page: 3,
    });
  });

  it('should set field error to true', () => {
    const action = {
      type: 'SEARCH_ERROR',
    };
    const state = {
      ...initialState,
      error: false,
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      error: true,
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      ...initialState,
    });
  });
});
