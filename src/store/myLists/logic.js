/* eslint-disable no-console */
import { createLogic } from 'redux-logic';
import { fromStorage } from '../../helpers';
import { API } from '../../api';

const createListLogic = createLogic({
  type: 'CREATE_LIST_REQUEST',
  latest: true,

  // CORS
  async process({ httpClient, action }, dispatch, done) {
    const ssid = fromStorage('SESSION_ID');
    const { name, description } = action.payload;
    try {
      const { data } = await httpClient({
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
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    done();
  },
});

export default createListLogic;
