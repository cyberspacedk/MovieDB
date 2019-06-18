import getTopFilmsLogic from '../logic';
import httpClientMock from '../../../utils/testHelpers/httpClientMock';

describe('getTopFilmsLogic operation', () => {
  const httpClient = httpClientMock({
    method: 'get',
    response: { data: [{}] },
  });

  const getState = jest.fn();
  const done = jest.fn();
  const dispatch = jest.fn(() => done());

  getState.mockReturnValue({
    topFilms: {
      films: [{}],
      loading: false,
      error: false,
    },
  });

  getTopFilmsLogic.process({ httpClient, getState }, dispatch, done);

  it('dispatches action - FETCH_RESPONSE', () => {
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'FETCH_RESPONSE',
      payload: getState.films,
    });
  });

  it('calls done', () => {
    expect(dispatch.mock.calls.length).toBe(1);
  });
});