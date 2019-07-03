/* eslint-disable no-console */
import { createLogic } from 'redux-logic';
import {
  getFavoritesResponse,
  getFavoritesError,
  getFavoritesRequest,
} from './actions';

const operationsFavoriteLogic = createLogic({
  type: 'OPERATIONS_FAVORITES_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const movieId = action.payload;
    const { whatToDo } = action;

    try {
      await httpClient({
        method: 'post',
        url: `account/{account_id}/favorite?`,
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
      const page = action.payload;
      const { data } = await httpClient({
        method: 'get',
        url: `account/{account_id}/favorite/movies?&sort_by=created_at.asc&page=${page}`,
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
