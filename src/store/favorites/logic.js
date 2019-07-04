import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import movies from '../../schema';
import {
  getFavoritesResponse,
  getFavoritesError,
  getFavoritesRequest,
} from './actions';
import writeToDatabase from '../database/actions';

const operationsFavoriteLogic = createLogic({
  type: 'OPERATIONS_FAVORITES_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const movieId = action.payload;
    const { whatToDo } = action;

    try {
      await httpClient.post(`account/{account_id}/favorite`, {
        media_type: 'movie',
        media_id: movieId,
        favorite: whatToDo,
      });

      dispatch(getFavoritesRequest());
    } catch (err) {
      throw new Error(err);
    }
    done();
  },
});

const getFavoritesLogic = createLogic({
  type: 'GET_FAVORITES_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const page = action.payload;

    try {
      const { data } = await httpClient.get(
        `account/{account_id}/favorite/movies`,
        {
          params: {
            sort_by: 'created_at.asc',
            page,
          },
        },
      );
      const norm = normalize(data.results, [movies]);

      const favorites = {
        ids: norm.result,
        total_results: data.total_results,
        current_page: data.page,
      };

      dispatch(writeToDatabase(norm.entities.movies));
      dispatch(getFavoritesResponse(favorites));
    } catch (err) {
      dispatch(getFavoritesError());
    }
    done();
  },
});

export { operationsFavoriteLogic, getFavoritesLogic };
