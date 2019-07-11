import reducer, { initialState } from '../reducers';

describe('reducers', () => {
  it('should set field loading to true', () => {
    const action = {
      type: 'GET_LIST_DETAILS_REQUEST',
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

  it('should store data', () => {
    const action = {
      type: 'GET_LIST_DETAILS_RESPONSE',
      payload: {
        ids: 55,
        totalResults: 3,
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
      totalResults: 3,
    });
  });

  it('should set field error to true', () => {
    const action = {
      type: 'GET_LIST_DETAILS_ERROR',
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
});
