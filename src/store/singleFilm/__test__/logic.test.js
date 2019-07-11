import singleFilmLogic from '../logic';
import { multiHttpClientMock } from '../../../helpers';

describe('Single: singleFilmLogic', () => {
  const requests = [
    { method: 'get', response: { data: {} } },
    { method: 'get', response: { data: {} } },
    { method: 'get', response: { data: {} } },
  ];

  const httpClient = multiHttpClientMock(requests);

  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      filmId: 957,
    },
  };

  singleFilmLogic.process({ httpClient, action }, dispatch, done);

  it('should dispatch 2 actions', () => {
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it('dispatches action - WRITE_TO_DATABASE', () => {
    expect(dispatch.mock.calls[0][0].type).toEqual('WRITE_TO_DATABASE');
  });

  it('dispatches action - SINGLE_RESPONSE', () => {
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'SINGLE_RESPONSE' });
  });

  it('calls done', () => {
    expect(done.mock.calls.length).toBe(1);
  });
});
