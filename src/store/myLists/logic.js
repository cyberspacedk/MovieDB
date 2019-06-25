/* eslint-disable no-console */
import { createLogic } from 'redux-logic';
import { fromStorage } from '../../helpers/helpers';

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
        url: `list?session_id=${ssid}&api_key=2452661f8c986fe61a12ec7532335900`,
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
