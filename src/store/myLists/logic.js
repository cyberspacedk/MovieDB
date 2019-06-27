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
  // CORS
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
          language: 'en',
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
        ...data,
        lists: data.results,
      };
      const { results: _r, ...myLists } = resp;
      dispatch(getCreatedListResponse(myLists));
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

export { createListLogic, getCreatedListLogic, deleteCreatedListLogic };
