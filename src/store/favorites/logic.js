/* eslint-disable no-console */
import { createLogic } from 'redux-logic';
import {
  getFavoritesResponse,
  getFavoritesError,
  getFavoritesRequest,
} from './actions';
import { fromStorage } from '../../helpers';

import { API } from '../../api';

const operationsFavoriteLogic = createLogic({
  type: 'OPERATIONS_FAVORITES_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const movieId = action.payload;
    const { whatToDo } = action;
    const SSID = fromStorage('SESSION_ID');
    try {
      await httpClient({
        method: 'post',
        url: `account/{account_id}/favorite?api_key=${API}&session_id=${SSID}`,
        data: {
          media_type: 'movie',
          media_id: movieId,
          favorite: whatToDo,
        },
      });
      dispatch(getFavoritesRequest());
    } catch (err) {
      console.log(err);
    }
    done();
  },
});

const getFavoritesLogic = createLogic({
  type: 'GET_FAVORITES_REQUEST',
  latest: true,

  async process({ httpClient }, dispatch, done) {
    try {
      const SSID = fromStorage('SESSION_ID');
      const { data } = await httpClient({
        method: 'get',
        url: `account/{account_id}/favorite/movies?api_key=${API}&session_id=${SSID}&sort_by=created_at.asc&page=${1}`,
      });

      const favorites = {
        favorites_list: data.results,
        current_page: data.page,
        total_pages: data.total_pages,
      };
      dispatch(getFavoritesResponse(favorites));
    } catch (err) {
      dispatch(getFavoritesError());
    }
    done();
  },
});

export { operationsFavoriteLogic, getFavoritesLogic };
