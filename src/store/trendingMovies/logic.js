import { createLogic } from 'redux-logic';
import { fetchDataError, fetchDataSuccess } from './actions';

const getTopFilmsLogic = createLogic({
  type: 'FETCH_REQUEST',
  latest: true,

  async process({ httpClient }, dispatch, done) {
    try {
      const {
        data: { results },
      } = await httpClient.get(`trending/movie/day?`);

      dispatch(fetchDataSuccess(results));
    } catch (err) {
      dispatch(fetchDataError(err));
    }
    done();
  },
});

export default getTopFilmsLogic;
