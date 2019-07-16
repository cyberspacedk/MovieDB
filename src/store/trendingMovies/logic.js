import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { fetchDataError, fetchDataSuccess } from './actions';
import writeToDatabase from '../database/actions';
import { Movies } from '../../schema';

const getTopFilmsLogic = createLogic({
  type: 'FETCH_REQUEST',
  latest: true,

  async process({ httpClient }, dispatch, done) {
    try {
      const {
        data: { results },
      } = await httpClient.get(`trending/movie/day`);

      const { entities, result } = normalize(results, [Movies]);

      dispatch(writeToDatabase(entities));
      dispatch(fetchDataSuccess(result));
    } catch (err) {
      dispatch(fetchDataError());
    }
    done();
  },
});

export default getTopFilmsLogic;
