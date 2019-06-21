const singleFilmRequest = filmId => ({
  type: 'SINGLE_REQUEST',
  payload: filmId,
});

const singleFilmError = () => ({ type: 'SINGLE_ERROR' });

const singleFilmSuccess = data => ({
  type: 'SINGLE_RESPONSE',
  payload: data,
});

export { singleFilmRequest, singleFilmError, singleFilmSuccess };
