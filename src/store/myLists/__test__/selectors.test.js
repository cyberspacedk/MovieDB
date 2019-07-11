import {
  getCurrentPage,
  isError,
  isEmpty,
  isLoading,
  getTotalPages,
  getLists,
} from '../selectors';

describe('My Lists:  selector', () => {
  const state = {
    myLists: {
      error: false,
      loading: false,
      ids: [1],
      total_results: 11,
      current_page: 5,
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

  describe('grab total results', () => {
    it('returns number of found results', () => {
      expect(getTotalPages(state)).toEqual(11);
    });
  });

  describe('grab current page', () => {
    it('returns number of current page', () => {
      expect(getCurrentPage(state)).toEqual(5);
    });
  });

  describe('grab my lists', () => {
    it('returns created lists', () => {
      const found = [{ id: 1, name: 'Comedy' }];
      expect(getLists(state)).toEqual(found);
    });
  });
});
