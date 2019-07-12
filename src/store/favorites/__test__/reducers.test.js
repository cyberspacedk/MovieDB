import reducer, { initialState } from '../reducers';

describe('Favorites: reducers', () => {
  it('should set loading field to true', () => {
    const action = {
      type: 'GET_FAVORITES_REQUEST',
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

  it('should return response', () => {
    const action = {
      type: 'GET_FAVORITES_RESPONSE',
      payload: {
        ids: [1, 2, 3],
        total_results: 3,
        current_page: 1,
      },
    };
    const state = {
      ...initialState,
      loading: true,
      error: false,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      loading: false,
      ...action.payload,
    });
  });

  it('should set error to true', () => {
    const action = {
      type: 'GET_FAVORITES_ERROR',
    };
    const state = {
      ...initialState,
      loading: true,
      error: false,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      error: true,
      loading: false,
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
