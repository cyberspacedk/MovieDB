/* eslint-disable no-console */
import { createLogic } from 'redux-logic';
import {
  getWatchListError,
  getWatchListResponse,
  getWatchListRequest,
} from './actions';
import { fromStorage } from '../../helpers';
import { API } from '../../api';

const operationWatchListLogic = createLogic({
  type: 'OPERATIONS_WATCHLIST_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const movieId = action.payload;
    const { whatToDo } = action;
    const SSID = fromStorage('SESSION_ID');
    try {
      await httpClient({
        method: 'post',
        url: `account/{account_id}/watchlist?api_key=${API}&session_id=${SSID}`,
        data: {
          media_type: 'movie',
          media_id: movieId,
          watchlist: whatToDo,
        },
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

  async process({ httpClient }, dispatch, done) {
    try {
      const SSID = fromStorage('SESSION_ID');
      const { data } = await httpClient({
        method: 'get',
        url: `account/{account_id}/watchlist/movies?api_key=${API}&session_id=${SSID}&sort_by=created_at.asc&page=${1}`,
      });

      const watchlist = {
        watchlist_list: data.results,
        current_page: data.page,
        total_pages: data.total_pages,
      };

      dispatch(getWatchListResponse(watchlist));
    } catch (err) {
      dispatch(getWatchListError());
    }
    done();
  },
});

export { operationWatchListLogic, getWatchListLogic };
