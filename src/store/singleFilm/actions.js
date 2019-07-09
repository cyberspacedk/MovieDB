const singleFilmRequest = filmId => ({
  type: 'SINGLE_REQUEST',
  payload: filmId,
});

const singleFilmError = () => ({ type: 'SINGLE_ERROR' });

const singleFilmSuccess = () => ({
  type: 'SINGLE_RESPONSE',
});

export { singleFilmRequest, singleFilmError, singleFilmSuccess };
