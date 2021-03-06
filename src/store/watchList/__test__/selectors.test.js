import {
  getWatchList,
  getCurrentPage,
  isError,
  isLoading,
  isEmpty,
  getTotalPages,
} from '../selectors';

describe('Watchlist: selector', () => {
  const state = {
    watchlist: {
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

  describe('Watchlist: data is loading', () => {
    it('returns loading true', () => {
      expect(isLoading(state)).toBeTruthy();
    });
  });

  describe('Watchlist: data succesfully received. ', () => {
    it('error returns false', () => {
      expect(isError(state)).toBeFalsy();
    });
  });

  describe('Watchlist: is data exist ?', () => {
    it('returns false if data exist', () => {
      expect(isEmpty(state)).toBeFalsy();
    });
  });

  describe('Watchlist: is data exist ?', () => {
    const nextState = {
      ...state,
      watchlist: {
        ...state.watchlist,
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

  describe('Watchlist: current page', () => {
    it('returns current page ', () => {
      expect(getCurrentPage(state)).toEqual(2);
    });
  });

  describe('Watchlist: total pages', () => {
    it('returns all pages ', () => {
      expect(getTotalPages(state)).toEqual(31);
    });
  });

  describe('Watchlist: select watchlist from database', () => {
    it('returns all pages ', () => {
      expect(getWatchList(state)).toEqual([{ id: 1 }]);
    });
  });
});
