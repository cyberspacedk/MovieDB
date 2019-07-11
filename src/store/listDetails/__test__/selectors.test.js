import {
  /* getListMovies, */
  isError,
  isLoading,
  isEmpty,
  getListName,
} from '../selectors';

describe('ListDetails:  selector', () => {
  const state = {
    listDetails: {
      error: false,
      loading: false,
      ids: [],
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
    it('returns true if array is empty', () => {
      expect(isEmpty(state)).toBeTruthy();
    });
  });

  describe('grab actual listName', () => {
    it('returns listName', () => {
      const id = 1;
      expect(getListName(state, id)).toBe('Comedy');
    });
  });
});
