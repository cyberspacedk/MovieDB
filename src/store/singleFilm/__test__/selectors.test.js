import { isError, isLoading, getMovie } from '../selectors';

describe('Single:  selector', () => {
  const state = {
    singleFilm: {
      error: false,
      loading: false,
    },
    database: {
      movies: { 1: { id: 1, name: 'Rambo' } },
      lists: { 1: { id: 1, name: 'Comedy' } },
      genres: { 1: { id: 1 } },
    },
  };

  describe('check is error exist', () => {
    it('returns false', () => {
      expect(isError(state)).toBeFalsy();
    });
  });

  describe('check is loading now', () => {
    it('returns false', () => {
      expect(isLoading(state)).toBeFalsy();
    });
  });

  describe('Grab film bby id', () => {
    it('shoud denormalize data', () => {
      expect(getMovie(state, 1)).toEqual({ id: 1, name: 'Rambo' });
    });
  });
});
