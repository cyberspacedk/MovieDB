import { normalize } from 'normalizr';
import getTopFilmsLogic from '../logic';
import { Movies } from '../../../schema';
import { httpClientMock } from '../../../helpers';

describe('getTopFilmsLogic operation', () => {
  describe('Trending SUCCESS', () => {
    const request = {
      method: 'get',
      response: {
        data: {
          results: [{ id: 1 }, { id: 2 }, { id: 3 }],
        },
      },
    };
    const httpClient = httpClientMock(request);
    const done = jest.fn();
    const dispatch = jest.fn();

    getTopFilmsLogic.process({ httpClient }, dispatch, done);

    const { results } = request.response.data;
    const { entities, result } = normalize(results, [Movies]);

    it('Should return correct URL', () => {
      expect(httpClient.get.mock.calls[0][0]).toBe(`trending/movie/day`);
    });

    it('Should dispatch 2 action', () => {
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

    it('dispatches action - FETCH_RESPONSE', () => {
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: 'FETCH_RESPONSE',
        payload: result,
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Trending FAILURE', () => {
    const request = {
      method: 'get',
      response: {},
      reject: true,
    };
    const httpClient = httpClientMock(request);
    const done = jest.fn();
    const dispatch = jest.fn();

    getTopFilmsLogic.process({ httpClient }, dispatch, done);

    it('Should dispatch 1 action', () => {
      expect(dispatch.mock.calls.length).toBe(1);
    });

    it('dispatches action - FETCH_RESPONSE', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'FETCH_ERROR',
      });
    });
  });
});
