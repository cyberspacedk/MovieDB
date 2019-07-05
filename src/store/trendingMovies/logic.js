import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { fetchDataError, fetchDataSuccess } from './actions';
import writeToMoviesDatabase from '../database/actions';
import { Movies } from '../../schema';

const getTopFilmsLogic = createLogic({
  type: 'FETCH_REQUEST',
  latest: true,

  async process({ httpClient }, dispatch, done) {
    try {
      const {
        data: { results },
      } = await httpClient.get(`trending/movie/day`);

      const norm = normalize(results, [Movies]);
      const { movies } = norm.entities;
      const response = norm.result;

      dispatch(writeToMoviesDatabase(movies));
      dispatch(fetchDataSuccess(response));
    } catch (err) {
      dispatch(fetchDataError(err));
    }
    done();
  },
});

export default getTopFilmsLogic;
