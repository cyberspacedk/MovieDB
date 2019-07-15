import getTopFilmsLogic from '../logic';
import { httpClientMock } from '../../../helpers';

describe('getTopFilmsLogic operation', () => {
  const httpClient = httpClientMock({
    method: 'get',
    response: { data: [1, 2, 3] },
  });

  const done = jest.fn();
  const dispatch = jest.fn();

  getTopFilmsLogic.process({ httpClient }, dispatch, done);

  it('dispatches action - FETCH_RESPONSE', () => {
    expect(dispatch.mock.calls.length).toBe(1);
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});
