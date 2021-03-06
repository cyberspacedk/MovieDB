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
    const nextState = {
      ...state,
      favorites: {
        ...state.favorites,
        ids: [],
      },
    };
    it('returns true if data doesnt exist', () => {
      expect(isEmpty(nextState)).toBeTruthy();
    });

    it('returns false if data exist', () => {
      expect(isEmpty(state)).toBeFalsy();
    });
  });

  describe('Favorites: current page', () => {
    it('returns current page ', () => {
      expect(getCurrentPage(state)).toEqual(2);
    });
  });

  describe('Favorites: total pages', () => {
    it('returns all pages ', () => {
      expect(getTotalPages(state)).toEqual(31);
    });
  });

  describe('Favorites: select favorites from database', () => {
    it('returns all pages ', () => {
      expect(getFavorites(state)).toEqual([{ id: 1 }]);
    });
  });
});
