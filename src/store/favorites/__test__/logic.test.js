/* eslint-disable global-require */
import { normalize } from 'normalizr';
import { Movies } from '../../../schema';
import { operationsFavoriteLogic, getFavoritesLogic } from '../logic';
import { httpClientMock } from '../../../helpers';

describe('Favorites: getFavoritesLogic', () => {
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

  getFavoritesLogic.process({ httpClient, action }, dispatch, done);

  const { data } = request.response;
  const { entities, result } = normalize(data.results, [Movies]);

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

describe('Favorites: operationsFavoriteLogic', () => {
  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: 5,
  };

  describe('Success operation', () => {
    const request = {
      method: 'post',
      response: { data: { results: [{}] } },
    };
    const httpClient = httpClientMock(request);

    operationsFavoriteLogic.process({ httpClient, action }, dispatch, done);

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Operation ends with fail', () => {
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
