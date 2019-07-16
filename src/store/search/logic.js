import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { Movies } from '../../schema';
import { searchError, searchSuccess } from './actions';
import writeToDatabase from '../database/actions';

const searchFilmsLogic = createLogic({
  type: 'SEARCH_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const { query, page } = action.payload;

    try {
      const { data } = await httpClient.get(`search/movie`, {
        params: {
          query,
          page,
        },
      });

      const { entities, result } = normalize(data.results, [Movies]);
      const response = {
        page: data.page,
        total_results: data.total_results,
        ids: result,
      };

      dispatch(writeToDatabase(entities));
      dispatch(searchSuccess(response));
    } catch (err) {
      dispatch(searchError());
    }
    done();
  },
});

export default searchFilmsLogic;
