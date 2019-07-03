/* eslint-disable no-console */
import { createLogic } from 'redux-logic';
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
      console.log(err);
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

      const watchlist = {
        watchlist_list: data.results,
        total_results: data.total_results,
        current_page: data.page,
      };

      dispatch(getWatchListResponse(watchlist));
    } catch (err) {
      dispatch(getWatchListError());
    }
    done();
  },
});

export { operationWatchListLogic, getWatchListLogic };
