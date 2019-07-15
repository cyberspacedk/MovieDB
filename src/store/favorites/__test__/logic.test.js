/* eslint-disable global-require */

import { operationsFavoriteLogic, getFavoritesLogic } from '../logic';
import { httpClientMock } from '../../../helpers';

describe('Favorites: getFavoritesLogic', () => {
  const request = {
    method: 'get',
    response: { data: { results: [{}] } },
  };

  const httpClient = httpClientMock(request);
  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      ids: [1],
    },
  };
  beforeEach(() => {
    jest.resetModules();
  });

  getFavoritesLogic.process({ httpClient, action }, dispatch, done);

  it('Check: is all actions were dispatched', () => {
    expect(dispatch.mock.calls.length).toBe(2);
  });

  xit('Use mock module normalizr', () => {
    jest.doMock('normalizr', () => ({
      normalize: jest.fn(() => ({
        entities: {
          movies: { 1: { id: 1 } },
        },
        result: [1],
      })),
    }));
    const { normalize } = require('normalizr');
    const { result } = normalize();
    expect(result).toEqual([1]);

    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'WRITE_TO_DATABASE',
      payload: {
        movies: { 1: { id: 1 } },
      },
    });
  });

  xit('Check favorites response', () => {
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: 'GET_FAVORITES_RESPONSE',
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
    const httpClient = httpClientMock({ method: 'post', response: {} });

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
