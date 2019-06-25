import { createLogic } from 'redux-logic';
import { singleFilmError, singleFilmSuccess } from './actions';

const singleFilmLogic = createLogic({
  type: 'SINGLE_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const filmId = action.payload;

    try {
      const { data } = await httpClient.get(
        `/movie/${filmId}?api_key=2452661f8c986fe61a12ec7532335900`,
      );

      const {
        data: { crew, cast },
      } = await httpClient.get(
        `/movie/${filmId}/credits?api_key=2452661f8c986fe61a12ec7532335900`,
      );

      const {
        data: { backdrops },
      } = await httpClient.get(
        `/movie/${filmId}/images?api_key=2452661f8c986fe61a12ec7532335900`,
      );

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
