/* eslint-disable no-console */
import { createLogic } from 'redux-logic';
import Cookies from 'js-cookie';
import {
  getFavoritesResponse,
  getFavoritesError,
  getFavoritesRequest,
} from './actions';

import { API } from '../../api';

const operationsFavoriteLogic = createLogic({
  type: 'OPERATIONS_FAVORITES_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const movieId = action.payload;
    const { whatToDo } = action;
    const SSID = Cookies.get('SESSION_ID');
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

  async process({ httpClient, action }, dispatch, done) {
    try {
      const SSID = Cookies.get('SESSION_ID');
      const page = action.payload;
      const { data } = await httpClient({
        method: 'get',
        url: `account/{account_id}/favorite/movies?api_key=${API}&session_id=${SSID}&sort_by=created_at.asc&page=${page}`,
      });

      const favorites = {
        favorites_list: data.results,
        total_results: data.total_results,
        current_page: data.page,
      };

      dispatch(getFavoritesResponse(favorites));
    } catch (err) {
      dispatch(getFavoritesError());
    }
    done();
  },
});

export { operationsFavoriteLogic, getFavoritesLogic };
