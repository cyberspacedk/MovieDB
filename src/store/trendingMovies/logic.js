import { createLogic } from 'redux-logic';
import { fetchDataError, fetchDataSuccess } from './actions';

const getTopFilmsLogic = createLogic({
  type: 'FETCH_REQUEST',
  latest: true,

  async process({ httpClient }, dispatch, done) {
    try {
      const {
        data: { results },
      } = await httpClient.get(
        `trending/movie/day?api_key=2452661f8c986fe61a12ec7532335900`,
      );
      dispatch(fetchDataSuccess(results));
    } catch (err) {
      dispatch(fetchDataError(err));
    }
    done();
  },
});

export default getTopFilmsLogic;
