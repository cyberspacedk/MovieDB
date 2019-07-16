/* eslint-disable global-require */
import { normalize } from 'normalizr';
import { Movies } from '../../../schema';
import { operationWatchListLogic, getWatchListLogic } from '../logic';
import { httpClientMock } from '../../../helpers';

describe('Watchlist: getWatchListLogic', () => {
  describe('Get watchlist SUCCESS', () => {
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
      payload: {
        ids: [1],
      },
    };

    getWatchListLogic.process({ httpClient, action }, dispatch, done);

    const { data } = request.response;
    const { entities, result } = normalize(data.results, [Movies]);

    it('Should return correct URL', () => {
      expect(httpClient.get.mock.calls[0][0]).toBe(
        'account/{account_id}/watchlist/movies',
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

    it('Check watchlist response', () => {
      const response = {
        ids: result,
        total_results: data.total_results,
        current_page: data.page,
      };

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: 'GET_WATCHLIST_RESPONSE',
        payload: {
          ...response,
        },
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Get watchlist FAILURE', () => {
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
        ids: [1],
      },
    };

    getWatchListLogic.process({ httpClient, action }, dispatch, done);

    it('Check: is all actions were dispatched', () => {
      expect(dispatch.mock.calls.length).toBe(1);
    });

    it('Should dispatch error action', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'GET_WATCHLIST_ERROR',
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });
});

describe('Watchlist: operationWatchListLogic', () => {
  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: 5,
  };

  describe('Operation SUCCESS', () => {
    const request = {
      method: 'post',
      response: { data: { results: [{}] } },
    };
    const httpClient = httpClientMock(request);

    operationWatchListLogic.process({ httpClient, action }, dispatch, done);

    it('Should return correct URL', () => {
      expect(httpClient.post.mock.calls[0][0]).toBe(
        'account/{account_id}/watchlist',
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

    operationWatchListLogic.process({ httpClient, action }, dispatch, done);
    it('Should throw Error', () => {
      expect(() => {
        throw new Error();
      }).toThrow();
    });
  });
});
