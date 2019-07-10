import {
  getFavorites,
  getCurrentPage,
  isError,
  isLoading,
  isEmpty,
  getTotalPages,
} from '../selectors';

describe('Favorites: selector', () => {
  const state = {
    favorites: {
      ids: [1],
      total_results: 31,
      current_page: 2,
      loading: true,
      error: false,
    },
    database: {
      movies: { 1: { id: 1 } },
    },
  };
  describe('Favorites: data is loading', () => {
    it('returns loading true', () => {
      expect(isLoading(state)).toBeTruthy();
    });
  });

  describe('Favorites: data succesfully received', () => {
    it('returns false', () => {
      expect(isError(state)).toBeFalsy();
    });
  });

  describe('Favorites: is data exist ?', () => {
    it('returns false if data exist', () => {
      expect(isEmpty(state)).toBeFalsy();
    });
  });

  describe('Favorites: current page', () => {
    it('returns current page ', () => {
      expect(getCurrentPage(state)).toEqual(state.favorites.current_page);
    });
  });

  describe('Favorites: total pages', () => {
    it('returns all pages ', () => {
      expect(getTotalPages(state)).toEqual(state.favorites.total_results);
    });
  });

  describe('Favorites: select favorites from database', () => {
    it('returns all pages ', () => {
      expect(getFavorites(state)).toEqual([{ id: 1 }]);
    });
  });
});
