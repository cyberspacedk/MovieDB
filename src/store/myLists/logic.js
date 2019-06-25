import { createLogic } from 'redux-logic';

const createListLogic = createLogic({
  type: 'CREATE_LIST_REQUEST',
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const ssid = JSON.parse(localStorage.getItem('SESSION_ID'));
    try {
      const { data } = await httpClient({
        method: 'post',
        url: `list?session_id=${ssid}&api_key=2452661f8c986fe61a12ec7532335900`,
        data: {
          name: 'test list',
          description: 'i try create my first list',
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
