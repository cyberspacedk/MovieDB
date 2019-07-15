import reducer from '../reducers';

describe('Search: reducers', () => {
  it('should set field loading to true and store query', () => {
    const action = {
      type: 'SEARCH_REQUEST',
      payload: 'sport',
    };

    const state = {
      loading: false,
      query: '',
    };

    expect(reducer(state, action)).toEqual({
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
      ids: [],
      page: 0,
      total_results: 0,
      error: false,
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
      error: false,
    };

    expect(reducer(state, action)).toEqual({
      error: true,
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      ids: [],
      page: 0,
      total_results: 0,
      loading: false,
      error: false,
      query: '',
    });
  });
});
