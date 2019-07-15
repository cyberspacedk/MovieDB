import reducer from '../reducers';

describe('List Details: reducers', () => {
  it('should set field loading to true', () => {
    const action = {
      type: 'GET_LIST_DETAILS_REQUEST',
    };

    const state = {
      loading: false,
    };

    expect(reducer(state, action)).toEqual({
      loading: true,
    });
  });

  it('should store data', () => {
    const action = {
      type: 'GET_LIST_DETAILS_RESPONSE',
      payload: {
        ids: 55,
        totalResults: 3,
      },
    };
    const state = {
      ids: [],
      totalResults: 0,
      loading: true,
    };
    expect(reducer(state, action)).toEqual({
      loading: false,
      ids: 55,
      totalResults: 3,
    });
  });

  it('should set field error to true', () => {
    const action = {
      type: 'GET_LIST_DETAILS_ERROR',
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
      totalResults: 0,
      loading: false,
      error: false,
    });
  });
});
