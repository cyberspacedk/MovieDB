import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import movies from '../../schema';
import { searchError, searchSuccess } from './actions';
import writeToDatabase from '../database/actions';

const searchFilmsLogic = createLogic({
  type: 'SEARCH_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const query = action.payload;
    const { page } = action;

    try {
      const { data } = await httpClient.get(`search/movie`, {
        params: {
          query,
          page,
        },
      });

      const norm = normalize(data.results, [movies]);
      const { results: _r, total_pages: _p, ...rest } = data;
      const resp = {
        ...rest,
        ids: norm.result,
      };

      dispatch(writeToDatabase(norm.entities.movies));
      dispatch(searchSuccess(resp));
    } catch (err) {
      dispatch(searchError());
    }
    done();
  },
});

export default searchFilmsLogic;
