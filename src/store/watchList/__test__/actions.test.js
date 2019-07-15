import {
  operationsWatchListRequest,
  getWatchListError,
  getWatchListRequest,
  getWatchListResponse,
} from '../actions';

describe('Watchlist: actions', () => {
  it('should request watchlist with page', () => {
    const page = 3;
    const expectedAction = {
      type: 'GET_WATCHLIST_REQUEST',
      payload: page,
    };
    expect(getWatchListRequest(page)).toEqual(expectedAction);
  });

  it('should add or remove film ', () => {
    const expectedAction = {
      type: 'OPERATIONS_WATCHLIST_REQUEST',
      payload: {
        movieId: 155,
        whatToDo: false,
      },
    };
    expect(operationsWatchListRequest(155, false)).toEqual(expectedAction);
  });

  it('should return responce - array', () => {
    const watch = [{ id: 1 }];
    const expectedAction = {
      type: 'GET_WATCHLIST_RESPONSE',
      payload: watch,
    };
    expect(getWatchListResponse(watch)).toEqual(expectedAction);
  });

  it('should return type: "GET_WATCHLIST_ERROR"', () => {
    const expectedAction = {
      type: 'GET_WATCHLIST_ERROR',
    };
    expect(getWatchListError()).toEqual(expectedAction);
  });
});
