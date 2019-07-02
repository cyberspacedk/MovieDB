/* eslint-disable camelcase */
/* eslint-disable no-console */
import { createLogic } from 'redux-logic';
import Cookies from 'js-cookie';
import { API } from '../../api';
import {
  getCreatedListResponse,
  getCreatedListError,
  getCreatedListRequest,
} from './actions';

const createListLogic = createLogic({
  type: 'CREATE_LIST_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const ssid = Cookies.get('SESSION_ID');
    const { name, description } = action.payload;
    try {
      await httpClient({
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        url: `list?session_id=${ssid}&api_key=${API}`,
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
    const ssid = Cookies.get('SESSION_ID');
    const page = action.payload;
    try {
      const { data } = await httpClient.get(
        `account/{account_id}/lists?api_key=${API}&session_id=${ssid}&page=${page}`,
      );
      const resp = {
        lists: data.results,
        total_results: data.total_results,
        current_page: data.page,
      };

      // ПРОВЕРИТЬ ЗАПРОС
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
    const ssid = Cookies.get('SESSION_ID');
    const id = action.payload;
    try {
      await httpClient.delete(`/list/${id}?api_key=${API}&session_id=${ssid}`);
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
    const ssid = Cookies.get('SESSION_ID');
    const { listId, movieId } = action.payload;

    try {
      const { data } = await httpClient({
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        url: `list/${listId}/add_item?api_key=${API}&session_id=${ssid}`,
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
