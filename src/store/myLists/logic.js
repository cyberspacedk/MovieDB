import { createLogic } from 'redux-logic';

const createListLogic = createLogic({
  type: 'CREATE_LIST_REQUEST',
  latest: true,

  // CORS
  async process({ httpClient, action }, dispatch, done) {
    const ssid = JSON.parse(localStorage.getItem('SESSION_ID'));
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
