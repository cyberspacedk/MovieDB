import { normalize } from 'normalizr';
import { Movies } from '../../../schema';
import searchFilmsLogic from '../logic';
import { httpClientMock } from '../../../helpers';

describe('Search: searchFilmsLogic', () => {
  describe('Search SUCCESS', () => {
    const request = {
      method: 'get',
      response: {
        data: {
          results: [{ id: 1 }, { id: 2 }],
          total_results: 111,
          page: 9,
        },
      },
    };
    const httpClient = httpClientMock(request);

    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: {
        query: 'Some',
        page: 333,
      },
    };

    searchFilmsLogic.process({ httpClient, action }, dispatch, done);
    const { data } = request.response;
    const { entities, result } = normalize(data.results, [Movies]);
    const response = {
      page: data.page,
      total_results: data.total_results,
      ids: result,
    };

    it('Should return correct URL', () => {
      const { query, page } = action.payload;
      expect(httpClient.get).toHaveBeenCalledWith(`search/movie`, {
        params: {
          query,
          page,
        },
      });
    });

    it('dispatches action - GET_CREATED_LIST_RESPONSE', () => {
      expect(dispatch.mock.calls.length).toBe(2);
    });

    it('dispatches action - WRITE_TO_DATABASE', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'WRITE_TO_DATABASE',
        payload: {
          lists: {},
          genres: {},
          ...entities,
        },
      });
    });

    it('dispatches action - SEARCH_RESPONSE', () => {
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: 'SEARCH_RESPONSE',
        payload: {
          ...response,
        },
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Search FAILURE', () => {
    const request = {
      method: 'get',
      response: {},
      reject: true,
    };
    const httpClient = httpClientMock(request);

    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: {
        query: 'Some',
      },
      page: 333,
    };

    searchFilmsLogic.process({ httpClient, action }, dispatch, done);

    it('dispatches action - GET_CREATED_LIST_RESPONSE', () => {
      expect(dispatch.mock.calls.length).toBe(1);
    });

    it('dispatches action - WRITE_TO_DATABASE', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'SEARCH_ERROR',
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });
});
