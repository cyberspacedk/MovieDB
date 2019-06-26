const operationsWatchListRequest = (movieId, what) => ({
  type: 'OPERATIONS_WATCHLIST_REQUEST',
  payload: movieId,
  whatToDo: what,
});

const getWatchListError = () => ({
  type: 'GET_WATCHLIST_ERROR',
});

const getWatchListRequest = () => ({
  type: 'GET_WATCHLIST_REQUEST',
});

const getWatchListResponse = watch => ({
  type: 'GET_WATCHLIST_RESPONSE',
  payload: watch,
});

export {
  operationsWatchListRequest,
  getWatchListError,
  getWatchListRequest,
  getWatchListResponse,
};
