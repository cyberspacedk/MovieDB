import searchFilmsLogic from '../logic';
import { httpClientMock } from '../../../helpers';

describe('Search: searchFilmsLogic', () => {
  const request = {
    method: 'get',
  };
  const httpClient = httpClientMock(request);

  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      query: 'Some',
    },
    page: 333,
  };

  searchFilmsLogic.process({ httpClient, action }, dispatch, done);

  it('dispatches action - GET_CREATED_LIST_RESPONSE', () => {
    // запускает экшн в catch
    // console.log(dispatch.mock.calls);
    expect(dispatch.mock.calls.length).toBe(1);
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});
