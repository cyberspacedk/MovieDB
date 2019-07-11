import reducer, { initialState } from '../reducers';

describe('My Lists: reducers', () => {
  it('should set field loading to true', () => {
    const action = {
      type: 'GET_CREATED_LIST_REQUEST',
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

  it('hould set field loading to false and store data', () => {
    const action = {
      type: 'GET_CREATED_LIST_RESPONSE',
      payload: {
        ids: [1, 2, 3],
        total_results: 3,
        current_page: 7,
      },
    };

    const state = {
      ...initialState,
      ids: [],
      total_results: 0,
      current_page: 0,
      loading: true,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      ids: [1, 2, 3],
      total_results: 3,
      current_page: 7,
      loading: false,
    });
  });

  it('should set field error to true', () => {
    const action = {
      type: 'GET_CREATED_LIST_ERROR',
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
