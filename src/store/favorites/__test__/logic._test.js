import { operationsFavoriteLogic, getFavoritesLogic } from '../logic';
import { httpClientMock } from '../../../helpers';

describe('Favorites: getFavoritesLogic', () => {
  const request = {
    method: 'get',
    response: { data: [{}] },
  };

  const httpClient = httpClientMock(request);

  const getState = jest.fn();
  const done = jest.fn();
  const dispatch = jest.fn();

  getState.mockReturnValue({
    films: [{}],
    loading: false,
    error: false,
  });

  getFavoritesLogic.process({ httpClient, getState }, dispatch, done);

  it('Check: is all actions were dispatched', () => {
    expect(dispatch.mock.calls.length).toBe(1);
  });

  /* it('dispatches action - FETCH_RESPONSE', () => {
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'GET_FAVORITES_RESPONSE',
      payload: getState.films,
    });
  });
 */
  it('calls done', () => {
    expect(done).toBeCalled();
  });
});

describe('Favorites: operationsFavoriteLogic', () => {
  const request = {
    method: 'post',
    response: { data: [{}] },
  };

  const httpClient = httpClientMock(request);

  const getState = jest.fn();
  const done = jest.fn();
  const dispatch = jest.fn();

  operationsFavoriteLogic.process({ httpClient, getState }, dispatch, done);

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});
