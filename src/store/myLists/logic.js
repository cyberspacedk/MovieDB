/* eslint-disable camelcase */

import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { writeListsToDataBase } from '../database/actions';
import { lists } from '../../schema';
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
      await httpClient.post('list', {
        name,
        description,
      });

      dispatch(getCreatedListRequest());
    } catch (err) {
      throw new Error(err);
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
      const { data } = await httpClient.get('account/{account_id}/lists', {
        params: {
          page,
        },
      });
      const norm = normalize(data.results, [lists]);

      const resp = {
        ids: norm.result,
        total_results: data.total_results,
        current_page: data.page,
      };

      dispatch(writeListsToDataBase(norm.entities.lists));
      dispatch(getCreatedListResponse(resp));
    } catch (err) {
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
      await httpClient.delete(`/list/${id}`);

      dispatch(getCreatedListRequest());
    } catch (err) {
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
      await httpClient.post(`list/${listId}/add_item`, {
        media_id: movieId,
      });
    } catch (err) {
      throw new Error(err);
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
