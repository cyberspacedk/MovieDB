import {
  operationsFavoritesRequest,
  getFavoritesRequest,
  getFavoritesResponse,
  getFavoritesError,
} from '../actions';

describe('Favorites: actions', () => {
  it('should request favorites with page', () => {
    const page = 3;
    const expectedAction = {
      type: 'GET_FAVORITES_REQUEST',
      payload: page,
    };
    expect(getFavoritesRequest(page)).toEqual(expectedAction);
  });

  it('should add or remove film', () => {
    const expectedAction = {
      type: 'OPERATIONS_FAVORITES_REQUEST',
      payload: {
        movieId: 2,
        whatToDo: true,
      },
    };
    expect(operationsFavoritesRequest(2, true)).toEqual(expectedAction);
  });

  it('should return responce - array', () => {
    const fav = [{ id: 1 }];
    const expectedAction = {
      type: 'GET_FAVORITES_RESPONSE',
      payload: fav,
    };
    expect(getFavoritesResponse(fav)).toEqual(expectedAction);
  });

  it('should return type: "GET_FAVORITES_ERROR"', () => {
    const expectedAction = {
      type: 'GET_FAVORITES_ERROR',
    };
    expect(getFavoritesError()).toEqual(expectedAction);
  });
});
