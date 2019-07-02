import { createLogic } from 'redux-logic';
import { API } from '../../api';
import { getListDetailsResponse, getCreatedListError } from './actions';

const getListDetailsLogic = createLogic({
  type: 'GET_LIST_DETAILS_REQUEST',
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const id = action.payload;
    try {
      const { data } = await httpClient.get(`/list/${id}?api_key=${API}`);
      dispatch(getListDetailsResponse(data.items));
    } catch (err) {
      dispatch(getCreatedListError());
    }
    done();
  },
});

export default getListDetailsLogic;
