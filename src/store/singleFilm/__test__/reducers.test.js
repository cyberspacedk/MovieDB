import reducer from '../reducers';

describe('Single: reducers', () => {
  it('should set field loading to true', () => {
    const action = {
      type: 'SINGLE_REQUEST',
    };

    const state = {
      loading: false,
    };

    expect(reducer(state, action)).toEqual({
      loading: true,
    });
  });

  it('hould set field loading to false', () => {
    const action = {
      type: 'SINGLE_RESPONSE',
    };

    const state = {
      loading: true,
    };
    expect(reducer(state, action)).toEqual({
      loading: false,
    });
  });

  it('should set field error to true', () => {
    const action = {
      type: 'SINGLE_ERROR',
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
      loading: false,
      error: false,
    });
  });
});
