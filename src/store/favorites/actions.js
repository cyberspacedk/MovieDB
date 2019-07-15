const operationsFavoritesRequest = (movieId, whatToDo) => ({
  type: 'OPERATIONS_FAVORITES_REQUEST',
  payload: {
    movieId,
    whatToDo,
  },
});

const getFavoritesError = () => ({
  type: 'GET_FAVORITES_ERROR',
});

const getFavoritesRequest = (page = 1) => ({
  type: 'GET_FAVORITES_REQUEST',
  payload: page,
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
