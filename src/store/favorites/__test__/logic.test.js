/* eslint-disable global-require */
import { normalize } from 'normalizr';
import { Movies } from '../../../schema';
import { operationsFavoriteLogic, getFavoritesLogic } from '../logic';
import { httpClientMock } from '../../../helpers';

describe('Favorites: getFavoritesLogic', () => {
  describe('Get favorites SUCCESS', () => {
    const request = {
      method: 'get',
      response: {
        data: {
          results: [{ id: 1 }, { id: 2 }],
          page: 3,
          total_results: 77,
        },
      },
    };

    const httpClient = httpClientMock(request);
    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: 3,
    };

    getFavoritesLogic.process({ httpClient, action }, dispatch, done);

    const { data } = request.response;
    const { entities, result } = normalize(data.results, [Movies]);
    const page = action.payload;

    it('Should return correct URL', () => {
      expect(httpClient.get).toHaveBeenCalledWith(
        'account/{account_id}/favorite/movies',
        {
          params: {
            sort_by: 'created_at.asc',
            page,
          },
        },
      );
    });

    it('Check: is all actions were dispatched', () => {
      expect(dispatch.mock.calls.length).toBe(2);
    });

    it('Use mock module normalizr', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'WRITE_TO_DATABASE',
        payload: {
          ...entities,
          lists: {},
          genres: {},
        },
      });
    });

    it('Check favorites response', () => {
      const response = {
        ids: result,
        total_results: data.total_results,
        current_page: data.page,
      };

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: 'GET_FAVORITES_RESPONSE',
        payload: {
          ...response,
        },
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Get favorites FAILURE', () => {
    const request = {
      method: 'get',
      response: {},
      reject: true,
    };

    const httpClient = httpClientMock(request);
    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: 5,
    };

    getFavoritesLogic.process({ httpClient, action }, dispatch, done);

    it('Check: is all actions were dispatched', () => {
      expect(dispatch.mock.calls.length).toBe(1);
    });

    it('Should dispatch error action', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'GET_FAVORITES_ERROR',
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });
});

describe('Favorites: operationsFavoriteLogic', () => {
  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      movieId: 121,
      favorite: true,
    },
  };

  describe('Operation SUCCESS', () => {
    const request = {
      method: 'post',
      response: { data: { results: [{}] } },
    };
    const httpClient = httpClientMock(request);

    operationsFavoriteLogic.process({ httpClient, action }, dispatch, done);

    it('Should return correct URL', () => {
      const { movieId, whatToDo } = action.payload;
      expect(httpClient.post).toHaveBeenCalledWith(
        'account/{account_id}/favorite',
        {
          media_type: 'movie',
          media_id: movieId,
          favorite: whatToDo,
        },
      );
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Operation FAILURE', () => {
    const request = {
      method: 'post',
      response: { data: { results: [{}] } },
      reject: true,
    };
    const httpClient = httpClientMock(request);

    operationsFavoriteLogic.process({ httpClient, action }, dispatch, done);
    it('Should throw Error', () => {
      expect(() => {
        throw new Error();
      }).toThrow();
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });
});
