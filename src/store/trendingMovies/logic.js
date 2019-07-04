import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { fetchDataError, fetchDataSuccess } from './actions';
import writeToDatabase from '../database/actions';
import movies from '../../schema';

const getTopFilmsLogic = createLogic({
  type: 'FETCH_REQUEST',
  latest: true,

  async process({ httpClient }, dispatch, done) {
    try {
      const {
        data: { results },
      } = await httpClient.get(`trending/movie/day`);

      const norm = normalize(results, [movies]);

      dispatch(writeToDatabase(norm.entities.movies));
      dispatch(fetchDataSuccess(norm.result));
    } catch (err) {
      dispatch(fetchDataError(err));
    }
    done();
  },
});

export default getTopFilmsLogic;
