import {
  getListMovies,
  isError,
  isLoading,
  isEmpty,
  getListName,
} from '../selectors';

describe('List Details:  selector', () => {
  const state = {
    listDetails: {
      error: false,
      loading: false,
      ids: [1],
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

  describe('grab actual listName', () => {
    it('returns listName', () => {
      const id = 1;
      expect(getListName(state, id)).toBe('Comedy');
    });
  });

  describe('grab actual listName', () => {
    it('returns listName', () => {
      const id = 3;
      expect(getListName(state, id)).toBe('');
    });
  });

  describe('grab movies belongs to list', () => {
    const found = [{ id: 1, name: 'Rambo' }];
    it('returns list movies', () => {
      expect(getListMovies(state)).toEqual(found);
    });
  });
});
