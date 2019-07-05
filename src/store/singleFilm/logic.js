import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { singleFilmError, singleFilmSuccess } from './actions';
import { Movie } from '../../schema';
import writeToDatabase from '../database/actions';

const singleFilmLogic = createLogic({
  type: 'SINGLE_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const filmId = action.payload;

    try {
      const { data } = await httpClient.get(`/movie/${filmId}`);

      const norm = normalize(data, Movie);

      const {
        data: { crew, cast },
      } = await httpClient.get(`/movie/${filmId}/credits`);

      const {
        data: { backdrops },
      } = await httpClient.get(`/movie/${filmId}/images`);
      const { movie, genres } = norm.entities;
      const response = {
        response: { ...data },
        id: norm.result,
        cast,
        crew,
        backdrops,
      };

      dispatch(writeToDatabase(movie, {}, genres));
      /* dispatch(writeToMoviesDatabase(norm.entities.movie)); */
      dispatch(singleFilmSuccess(response));
    } catch (err) {
      dispatch(singleFilmError());
    }
    done();
  },
});

export default singleFilmLogic;
