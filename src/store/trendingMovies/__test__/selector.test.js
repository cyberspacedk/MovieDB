import { getTrending, isloading, isError, isEmpty } from '../selectors';

describe('TrendingMovies: selector', () => {
  const state = {
    trending: {
      ids: [1],
      loading: false,
      error: false,
    },
    database: {
      movies: { 1: { id: 1 } },
    },
  };
  it('returns all films', () => {
    expect(getTrending(state)).toEqual([{ id: 1 }]);
  });

  it('returns loading status', () => {
    expect(isloading(state)).toBeFalsy();
  });

  it('returns error status', () => {
    expect(isError(state)).toBeFalsy();
  });

  it('returns false if data exist ', () => {
    expect(isEmpty(state)).toBeFalsy();
  });

  it('returns true if data doesnt exist', () => {
    const nextState = {
      ...state,
      trending: {
        ...state.trending,
        ids: [],
      },
    };
    expect(isEmpty(nextState)).toBeTruthy();
  });
});
