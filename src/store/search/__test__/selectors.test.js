import {
  isError,
  isLoading,
  isEmpty,
  getTotalResults,
  getQuery,
  getCurrentPage,
  getSearched,
} from '../selectors';

describe('Search:  selector', () => {
  const state = {
    search: {
      error: false,
      loading: false,
      ids: [1],
      query: 'some',
      total_results: 5,
      page: 3,
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

  describe('check is results exist', () => {
    it('returns false if array include at least one id', () => {
      expect(isEmpty(state)).toBeFalsy();
    });
  });

  describe('grab query string', () => {
    it('returns query string', () => {
      expect(getQuery(state)).toBe('some');
    });
  });

  describe('grab total results', () => {
    it('returns number of found results', () => {
      expect(getTotalResults(state)).toEqual(5);
    });
  });

  describe('grab current page', () => {
    it('returns number of current page', () => {
      expect(getCurrentPage(state)).toEqual(3);
    });
  });

  describe('grab found films', () => {
    it('returns founded films', () => {
      const found = [{ id: 1, name: 'Rambo' }];
      expect(getSearched(state)).toEqual(found);
    });
  });
});
