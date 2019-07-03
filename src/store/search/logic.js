import { createLogic } from 'redux-logic';
import { searchError, searchSuccess } from './actions';

const searchFilmsLogic = createLogic({
  type: 'SEARCH_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const query = action.payload;
    const { page } = action;

    try {
      const { data } = await httpClient.get(`search/movie`, {
        params: {
          query,
          page,
        },
      });

      dispatch(searchSuccess(data));
    } catch (err) {
      dispatch(searchError());
    }
    done();
  },
});

export default searchFilmsLogic;
