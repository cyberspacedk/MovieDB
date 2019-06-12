import { createLogic } from 'redux-logic';
import { fetchDataError, fetchDataSuccess } from './actions';

const getTopFilmsLogic = createLogic({
  type: 'FETCH_REQUEST',
  cancelType: 'FETCH_CANCEL',
  latest: true,

  async process({ httpClient }, dispatch, done) {
    try {
      const data = await httpClient.get(
        `trending/movie/week${httpClient.defaults.params.apiKey}`,
      );
      dispatch(fetchDataSuccess(data.data.results));
    } catch (err) {
      dispatch(fetchDataError(err));
    }
    done();
  },
});

export default getTopFilmsLogic;
