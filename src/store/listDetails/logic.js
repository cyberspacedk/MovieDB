import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { Movies } from '../../schema';
import {
  getListDetailsResponse,
  getCreatedListError,
  getListDetailsRequest,
} from './actions';
import writeToDatabase from '../database/actions';

const getListDetailsLogic = createLogic({
  type: 'GET_LIST_DETAILS_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const id = action.payload;

    try {
      const { data } = await httpClient.get(`/list/${id}`);

      const { entities, result } = normalize(data.items, [Movies]);
      const response = {
        ids: result,
        totalResults: data.item_count,
      };

      dispatch(writeToDatabase(entities));
      dispatch(getListDetailsResponse(response));
    } catch (err) {
      dispatch(getCreatedListError());
    }
    done();
  },
});

const deleteMovieFromListLogic = createLogic({
  type: 'DELETE_MOVIE_FROM_LIST_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const { listId, movieId } = action.payload;
    try {
      await httpClient.post(`/list/${listId}/remove_item`, {
        media_id: movieId,
      });
      dispatch(getListDetailsRequest(listId));
    } catch (err) {
      throw new Error(err);
    }
    done();
  },
});

export { getListDetailsLogic, deleteMovieFromListLogic };
