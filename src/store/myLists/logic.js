/* eslint-disable camelcase */
/* eslint-disable no-console */
import { createLogic } from 'redux-logic';
import {
  getCreatedListResponse,
  getCreatedListError,
  getCreatedListRequest,
} from './actions';

const createListLogic = createLogic({
  type: 'CREATE_LIST_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const { name, description } = action.payload;
    try {
      await httpClient({
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        url: `list?`,
        data: {
          name,
          description,
        },
      });
      dispatch(getCreatedListRequest());
    } catch (err) {
      console.log(err);
    }
    done();
  },
});

const getCreatedListLogic = createLogic({
  type: 'GET_CREATED_LIST_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const page = action.payload;

    try {
      const { data } = await httpClient.get(
        `account/{account_id}/lists?&page=${page}`,
      );
      const resp = {
        lists: data.results,
        total_results: data.total_results,
        current_page: data.page,
      };

      dispatch(getCreatedListResponse(resp));
    } catch (err) {
      console.log(err);
      dispatch(getCreatedListError());
    }
    done();
  },
});

const deleteCreatedListLogic = createLogic({
  type: 'DELETE_LIST_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const id = action.payload;
    try {
      await httpClient.delete(`/list/${id}?`);
      dispatch(getCreatedListRequest());
    } catch (err) {
      console.log(err);
      dispatch(getCreatedListRequest());
    }
    done();
  },
});

const addMovieToListLogic = createLogic({
  type: 'ADD_MOVIE_TO_LIST_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const { listId, movieId } = action.payload;

    try {
      const { data } = await httpClient({
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        url: `list/${listId}/add_item?`,
        data: {
          media_id: movieId,
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    done();
  },
});

export {
  createListLogic,
  getCreatedListLogic,
  deleteCreatedListLogic,
  addMovieToListLogic,
};
