import getTopFilmsLogic from '../logic';
import { httpClientMock } from '../../../helpers';

describe('getTopFilmsLogic operation', () => {
  const httpClient = httpClientMock({
    method: 'get',
    response: { data: [1, 2, 3] },
  });

  const getState = jest.fn();
  const done = jest.fn();
  const dispatch = jest.fn();

  getState.mockReturnValue({
    ids: [1, 2, 3],
    loading: false,
    error: false,
  });

  getTopFilmsLogic.process({ httpClient, getState }, dispatch, done);

  it('dispatches action - FETCH_RESPONSE', () => {
    expect(dispatch.mock.calls.length).toBe(1);
    /*  expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'FETCH_RESPONSE',
      payload: getState.ids,
    }); */
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});
