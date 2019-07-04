import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import writeToDatabase from '../database/actions';
import movies from '../../schema';
import {
  getWatchListError,
  getWatchListResponse,
  getWatchListRequest,
} from './actions';

const operationWatchListLogic = createLogic({
  type: 'OPERATIONS_WATCHLIST_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const movieId = action.payload;
    const { whatToDo } = action;

    try {
      await httpClient.post('account/{account_id}/watchlist', {
        media_type: 'movie',
        media_id: movieId,
        watchlist: whatToDo,
      });

      dispatch(getWatchListRequest());
    } catch (err) {
      throw new Error(err);
    }
    done();
  },
});

const getWatchListLogic = createLogic({
  type: 'GET_WATCHLIST_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const page = action.payload;

    try {
      const { data } = await httpClient.get(
        'account/{account_id}/watchlist/movies',
        {
          params: {
            sort_by: 'created_at.asc',
            page,
          },
        },
      );

      const norm = normalize(data.results, [movies]);

      const watchlist = {
        ids: norm.result,
        total_results: data.total_results,
        current_page: data.page,
      };

      dispatch(writeToDatabase(norm.entities.movies));
      dispatch(getWatchListResponse(watchlist));
    } catch (err) {
      dispatch(getWatchListError());
    }
    done();
  },
});

export { operationWatchListLogic, getWatchListLogic };
