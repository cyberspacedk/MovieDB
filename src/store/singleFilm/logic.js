import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { singleFilmError, singleFilmSuccess } from './actions';
import { movies } from '../../schema';
import { writeToMoviesDatabase } from '../database/actions';

const singleFilmLogic = createLogic({
  type: 'SINGLE_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const filmId = action.payload;

    try {
      const { data } = await httpClient.get(`/movie/${filmId}`);
      const norm = normalize(data, movies);
      const {
        data: { crew, cast },
      } = await httpClient.get(`/movie/${filmId}/credits`);

      const {
        data: { backdrops },
      } = await httpClient.get(`/movie/${filmId}/images`);

      const aboutFilm = {
        ...data,
        ids: norm.result,
        cast,
        crew,
        backdrops,
      };
      dispatch(writeToMoviesDatabase(norm.entities.movies));
      dispatch(singleFilmSuccess(aboutFilm));
    } catch (err) {
      dispatch(singleFilmError());
    }
    done();
  },
});

export default singleFilmLogic;
