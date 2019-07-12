import { operationWatchListLogic, getWatchListLogic } from '../logic';
import { httpClientMock } from '../../../helpers';

describe('Wetchlist: getWatchListLogic', () => {
  const request = {
    method: 'get',
    response: { data: { results: [{}] } },
  };

  const httpClient = httpClientMock(request);

  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      page: 555,
    },
  };

  getWatchListLogic.process({ httpClient, action }, dispatch, done);

  it('Check: is all actions were dispatched', () => {
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it('dispatches action - WRITE_TO_DATABASE ', () => {
    expect(dispatch.mock.calls[0][0].type).toEqual('WRITE_TO_DATABASE');
  });

  it('dispatches action - GET_WATCHLIST_RESPONSE ', () => {
    expect(dispatch.mock.calls[1][0].type).toEqual('GET_WATCHLIST_RESPONSE');
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});

describe('Wetchlist: operationWatchListLogic', () => {
  const request = {
    method: 'post',
  };

  const httpClient = httpClientMock(request);

  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: 91,
    whatToDo: true,
  };

  operationWatchListLogic.process({ httpClient, action }, dispatch, done);

  it('Check: is all actions were dispatched', () => {
    expect(dispatch.mock.calls.length).toBe(1);
  });

  it('Shoud launch action - GET_WATCHLIST_REQUEST', () => {
    expect(dispatch.mock.calls[0][0].type).toEqual('GET_WATCHLIST_REQUEST');
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});
