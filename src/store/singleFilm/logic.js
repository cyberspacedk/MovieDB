import { createLogic } from 'redux-logic';
import { singleFilmError, singleFilmSuccess } from './actions';

const singleFilmLogic = createLogic({
  type: 'SINGLE_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const filmId = action.payload;

    try {
      const { data } = await httpClient.get(`/movie/${filmId}?`);

      const {
        data: { crew, cast },
      } = await httpClient.get(`/movie/${filmId}/credits?`);

      const {
        data: { backdrops },
      } = await httpClient.get(`/movie/${filmId}/images?`);

      const aboutFilm = {
        ...data,
        cast,
        crew,
        backdrops,
      };
      dispatch(singleFilmSuccess(aboutFilm));
    } catch (err) {
      dispatch(singleFilmError());
    }
    done();
  },
});

export default singleFilmLogic;
