import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { singleFilmError, singleFilmSuccess } from './actions';
import { Movies } from '../../schema';
import writeToDatabase from '../database/actions';

const singleFilmLogic = createLogic({
  type: 'SINGLE_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const filmId = action.payload;

    try {
      const { data } = await httpClient.get(`/movie/${filmId}`);

      const {
        data: { crew, cast },
      } = await httpClient.get(`/movie/${filmId}/credits`);

      const {
        data: { backdrops },
      } = await httpClient.get(`/movie/${filmId}/images`);

      const movie = {
        ...data,
        crew,
        cast,
        backdrops,
      };
      const { entities } = normalize(movie, Movies);
      await dispatch(writeToDatabase(entities));
      dispatch(singleFilmSuccess());
    } catch (err) {
      dispatch(singleFilmError());
    }
    done();
  },
});

export default singleFilmLogic;
