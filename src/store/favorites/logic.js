/* eslint-disable no-console */
import { createLogic } from 'redux-logic';
import { fromStorage } from '../../helpers/helpers';
import { getFavoritesResponse, getFavoritesError } from './actions';

const addToFavoriteLogic = createLogic({
  type: 'ADD_TO_FAVORITES_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const ssid = fromStorage('SESSION_ID');
    const movieId = action.payload;
    console.log(movieId);
    try {
      const { data } = await httpClient({
        method: 'post',
        url: `account/{account_id}/favorite?api_key=2452661f8c986fe61a12ec7532335900&session_id=${ssid}`,
        data: {
          media_type: 'movie',
          media_id: movieId,
          favorite: true,
        },
      });
      console.log(data);
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
    const ssid = fromStorage('SESSION_ID');
    console.log(ssid);
    try {
      const { data } = await httpClient({
        method: 'get',
        url: `account/{account_id}/favorite/movies?api_key=2452661f8c986fe61a12ec7532335900&session_id=${ssid}&sort_by=created_at.asc&page=${1}`,
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

export { addToFavoriteLogic, getFavoritesLogic };
