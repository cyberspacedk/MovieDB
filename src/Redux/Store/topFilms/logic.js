import { createLogic } from 'redux-logic';
import { fetchDataError, fetchDataSuccess } from './actions';

const getTopFilmsLogic = createLogic({
  type: 'FETCH_REQUEST',
  cancelType: 'FETCH_CANCEL',
  latest: true,

  async process({ httpClient }, dispatch, done) {
    try {
      const films = await httpClient
        .get(
          'https://api.themoviedb.org/3/trending/movie/week?api_key=2452661f8c986fe61a12ec7532335900',
        )
        .then(({ data }) => data.results);
      dispatch(fetchDataSuccess(films));
    } catch (err) {
      dispatch(fetchDataError(err));
    }
    done();
  },
});

export default getTopFilmsLogic;
