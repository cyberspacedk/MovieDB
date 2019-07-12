import searchFilmsLogic from '../logic';
import { httpClientMock } from '../../../helpers';

describe('Search: searchFilmsLogic', () => {
  const request = {
    method: 'get',
    response: { data: { results: {} } },
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
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it('dispatches action - WRITE_TO_DATABASE', () => {
    expect(dispatch.mock.calls[0][0].type).toBe('WRITE_TO_DATABASE');
  });

  it('dispatches action - SEARCH_RESPONSE', () => {
    expect(dispatch.mock.calls[1][0].type).toBe('SEARCH_RESPONSE');
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});
