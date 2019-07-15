import reducer from '../reducers';

describe('My Lists: reducers', () => {
  it('should set field loading to true', () => {
    const action = {
      type: 'GET_CREATED_LIST_REQUEST',
    };

    const state = {
      loading: false,
    };

    expect(reducer(state, action)).toEqual({
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
      ids: [],
      total_results: 0,
      current_page: 0,
      loading: true,
    };
    expect(reducer(state, action)).toEqual({
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
      error: false,
    };

    expect(reducer(state, action)).toEqual({
      error: true,
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
