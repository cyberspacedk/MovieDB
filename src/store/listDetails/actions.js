const getCreatedListError = () => ({
  type: 'GET_LIST_DETAILS_ERROR',
});

const getListDetailsRequest = listId => ({
  type: 'GET_LIST_DETAILS_REQUEST',
  payload: listId,
});

const getListDetailsResponse = data => ({
  type: 'GET_LIST_DETAILS_RESPONSE',
  payload: data,
});

const deleteMovieFromListRequest = (listId, movieId) => ({
  type: 'DELETE_MOVIE_FROM_LIST_REQUEST',
  payload: {
    listId,
    movieId,
  },
});
export {
  getCreatedListError,
  getListDetailsRequest,
  getListDetailsResponse,
  deleteMovieFromListRequest,
};
