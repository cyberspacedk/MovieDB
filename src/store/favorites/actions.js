const addToFavoritesRequest = movieId => ({
  type: 'ADD_TO_FAVORITES_REQUEST',
  payload: movieId,
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
  addToFavoritesRequest,
  getFavoritesRequest,
  getFavoritesResponse,
  getFavoritesError,
};
