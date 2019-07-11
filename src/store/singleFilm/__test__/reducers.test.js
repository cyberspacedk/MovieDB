import reducer, { initialState } from '../reducers';

describe('Single: reducers', () => {
  it('should set field loading to true', () => {
    const action = {
      type: 'SINGLE_REQUEST',
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

  it('hould set field loading to false', () => {
    const action = {
      type: 'SINGLE_RESPONSE',
    };

    const state = {
      ...initialState,
      loading: true,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      loading: false,
    });
  });

  it('should set field error to true', () => {
    const action = {
      type: 'SINGLE_ERROR',
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
