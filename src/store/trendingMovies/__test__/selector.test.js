import { getTopFilmsSelector, isloading, isError } from '../selectors';

describe('topfilms selector', () => {
  const state = {
    topFilms: {
      films: [{}],
      loading: false,
      error: false,
    },
  };
  it('returns all films', () => {
    expect(getTopFilmsSelector(state)).toEqual(state.topFilms.films);
  });

  it('returns loadiing status', () => {
    expect(isloading(state)).toEqual(state.topFilms.loading);
  });

  it('returns error status', () => {
    expect(isError(state)).toEqual(state.topFilms.error);
  });
});
