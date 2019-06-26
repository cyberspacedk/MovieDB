const operationsFavoritesRequest = (movieId, what) => ({
  type: 'OPERATIONS_FAVORITES_REQUEST',
  payload: movieId,
  whatToDo: what,
});

const getFavoritesError = () => ({
  type: 'GET_FAVORITES_ERROR',
});

const getFavoritesRequest = () => ({
  type: 'GET_FAVORITES_REQUEST',
});

const getFavoritesResponse = fav => ({
  type: 'GET_FAVORITES_RESPONSE',
  payload: fav,
});

export {
  operationsFavoritesRequest,
  getFavoritesRequest,
  getFavoritesResponse,
  getFavoritesError,
};
