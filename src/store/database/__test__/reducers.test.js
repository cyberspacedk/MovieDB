import reducer, { initialState } from '../reducers';

describe('Database: reducers', () => {
  const action = {
    type: 'WRITE_TO_DATABASE',
    payload: {
      movies: { 1: { id: 1 } },
      genres: { 1: { id: 1 } },
      lists: { 1: { id: 1 } },
    },
  };

  const state = {
    ...initialState,
  };

  it('should return data', () => {
    expect(reducer(state, action)).toEqual({
      movies: { 1: { id: 1 } },
      genres: { 1: { id: 1 } },
      lists: { 1: { id: 1 } },
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      ...initialState,
    });
  });
});
