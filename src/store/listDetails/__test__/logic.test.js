import { getListDetailsLogic, deleteMovieFromListLogic } from '../logic';
import { httpClientMock } from '../../../helpers';

describe('List Details: getListDetailsLogic', () => {
  const request = {
    method: 'get',
    response: { data: { items: {} } },
  };

  const httpClient = httpClientMock(request);
  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      id: 1,
    },
  };

  getListDetailsLogic.process({ httpClient, action }, dispatch, done);

  it('dispatches 2 action ', () => {
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it('dispatches action - WRITE_TO_DATABASE', () => {
    expect(dispatch.mock.calls[0][0].type).toBe('WRITE_TO_DATABASE');
  });

  it('dispatches action - GET_LIST_DETAILS_RESPONSE', () => {
    expect(dispatch.mock.calls[1][0].type).toBe('GET_LIST_DETAILS_RESPONSE');
  });

  it('calls done', () => {
    expect(done.mock.calls.length).toBe(1);
  });
});

describe('List Details: deleteMovieFromListLogic', () => {
  const request = {
    method: 'post',
  };
  const httpClient = httpClientMock(request);

  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      listId: 100,
      movieId: 777,
    },
  };
  deleteMovieFromListLogic.process({ httpClient, action }, dispatch, done);

  it('spatches action', () => {
    expect(dispatch.mock.calls.length).toBe(1);
  });

  it('dispatches action - GET_LIST_DETAILS_REQUEST', () => {
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'GET_LIST_DETAILS_REQUEST',
      payload: 100,
    });
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});
