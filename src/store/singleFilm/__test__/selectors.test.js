import { isError, isLoading } from '../selectors';

describe('Single:  selector', () => {
  const state = {
    singleFilm: {
      error: false,
      loading: false,
    },
    database: {
      movies: { 1: { id: 1, name: 'Rambo' } },
      lists: { 1: { id: 1, name: 'Comedy' } },
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
});
