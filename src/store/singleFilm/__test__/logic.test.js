import { normalize } from 'normalizr';
import singleFilmLogic from '../logic';
import { Movies } from '../../../schema';

import { multiHttpClientMock } from '../../../helpers';

describe('Single: singleFilmLogic', () => {
  describe('Single movie SUCCESS', () => {
    const requests = [
      { method: 'get', response: { data: [{ id: 1 }, { id: 2 }] } },
      {
        method: 'get',
        response: { data: { crew: [{ id: 1 }, { id: 2 }], cast: [{ id: 1 }] } },
      },
      { method: 'get', response: { data: { backdrops: [{ id: 1 }] } } },
    ];

    const httpClient = multiHttpClientMock(requests);

    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: {
        filmId: 957,
      },
    };
    const { data } = requests[0].response;
    const { crew, cast } = requests[1].response.data;
    const { backdrops } = requests[2].response.data;

    singleFilmLogic.process({ httpClient, action }, dispatch, done);

    const movie = {
      ...data,
      crew,
      cast,
      backdrops,
    };
    const { entities } = normalize(movie, Movies);
    const filmId = action.payload;

    it('Should return correct URL', () => {
      expect(httpClient.get).toHaveBeenCalledWith(`/movie/${filmId}`);
      expect(httpClient.get).toHaveBeenCalledWith(`/movie/${filmId}/credits`);
      expect(httpClient.get).toHaveBeenCalledWith(`/movie/${filmId}/images`);
    });

    it('should dispatch 2 actions', () => {
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

    it('dispatches action - SINGLE_RESPONSE', () => {
      expect(dispatch).toHaveBeenNthCalledWith(2, { type: 'SINGLE_RESPONSE' });
    });

    it('calls done', () => {
      expect(done.mock.calls.length).toBe(1);
    });
  });

  describe('Single movie FAILURE', () => {
    const requests = [{ method: 'get', response: {}, reject: true }];

    const httpClient = multiHttpClientMock(requests);

    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: {
        filmId: 957,
      },
    };

    singleFilmLogic.process({ httpClient, action }, dispatch, done);

    it('should dispatch 1 actions', () => {
      expect(dispatch.mock.calls.length).toBe(1);
    });

    it('dispatches action - SINGLE_RESPONSE', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, { type: 'SINGLE_ERROR' });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });
});
