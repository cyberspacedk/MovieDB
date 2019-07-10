import { operationsFavoriteLogic, getFavoritesLogic } from '../logic';
import { httpClientMock } from '../../../helpers';

describe('Favorites: getFavoritesLogic', () => {
  const request = {
    method: 'get',
    response: { data: { results: [{}] } },
  };

  const httpClient = httpClientMock(request);
  const getState = jest.fn();
  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      ids: [1],
    },
  };
  const entities = {
    genres: { 1: { id: 1 } },
    movies: { 1: { id: 1 } },
    lists: { 1: { id: 1 } },
  };
  getState.mockReturnValue({});

  getFavoritesLogic.process(
    { httpClient, action, entities },
    dispatch,
    done,
    getState,
  );

  it('Check: is all actions were dispatched', () => {
    expect(dispatch.mock.calls.length).toBe(2);
  });

  xit('dispatches action - WRITE_TO_DATABASE and GET_FAVORITES_RESPONSE', () => {
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'WRITE_TO_DATABASE',
      payload: {
        movies: entities.movies,
        genres: entities.genres,
        lists: entities.lists,
      },
    });
    expect(dispatch.mock.calls[0][1]).toEqual({
      type: 'GET_FAVORITES_RESPONSE',
      payload: {
        ids: [1],
      },
    });
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});

describe('Favorites: operationsFavoriteLogic', () => {
  const request = {
    method: 'post',
    response: { data: { results: [{}] } },
  };

  const httpClient = httpClientMock(request);

  const done = jest.fn();
  const dispatch = jest.fn();

  operationsFavoriteLogic.process(
    { httpClient, action: { payload: {} } },
    dispatch,
    done,
  );

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});
