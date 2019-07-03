import { createLogic } from 'redux-logic';
import {
  getListDetailsResponse,
  getCreatedListError,
  getListDetailsRequest,
} from './actions';

const getListDetailsLogic = createLogic({
  type: 'GET_LIST_DETAILS_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const id = action.payload;
    try {
      const { data } = await httpClient.get(`/list/${id}`);

      const details = {
        list_details: data.items,
        list_name: data.name,
        totalResults: data.item_count,
      };
      dispatch(getListDetailsResponse(details));
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
      console.log(err);
    }
    done();
  },
});

export { getListDetailsLogic, deleteMovieFromListLogic };