import {
  createListLogic,
  getCreatedListLogic,
  deleteCreatedListLogic,
  addMovieToListLogic,
} from '../logic';
import { httpClientMock } from '../../../helpers';

describe('My Lists: createListLogic', () => {
  const request = {
    method: 'post',
  };
  const httpClient = httpClientMock(request);

  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      name: 'Some name',
      description: 'Some description',
    },
    formikBag: {
      setSubmitting: jest.fn(),
      setErrors: jest.fn(),
      setStatus: jest.fn(),
    },
  };

  createListLogic.process({ httpClient, action }, dispatch, done);

  it('dispatch action', () => {
    expect(dispatch.mock.calls.length).toBe(1);
  });

  it('dispatches action - GET_CREATED_LIST_REQUEST', () => {
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'GET_CREATED_LIST_REQUEST',
      payload: 1,
    });
  });

  it('should launch form status', () => {
    expect(action.formikBag.setStatus).toHaveBeenCalled();
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});

describe('My Lists: getCreatedListLogic', () => {
  const request = {
    method: 'get',
    response: { data: { results: {} } },
  };
  const httpClient = httpClientMock(request);

  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      page: 100,
    },
  };

  getCreatedListLogic.process({ httpClient, action }, dispatch, done);

  it('dispatches 2 action ', () => {
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it('dispatches action - WRITE_TO_DATABASE', () => {
    expect(dispatch.mock.calls[0][0].type).toBe('WRITE_TO_DATABASE');
  });

  it('dispatches action - GET_CREATED_LIST_RESPONSE', () => {
    expect(dispatch.mock.calls[1][0].type).toBe('GET_CREATED_LIST_RESPONSE');
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});

describe('My Lists: deleteCreatedListLogic', () => {
  const request = {
    method: 'delete',
  };
  const httpClient = httpClientMock(request);

  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      id: 100,
    },
  };

  deleteCreatedListLogic.process({ httpClient, action }, dispatch, done);

  it('dispatches action ', () => {
    expect(dispatch.mock.calls.length).toBe(1);
  });

  it('dispatches action - GET_CREATED_LIST_REQUEST', () => {
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'GET_CREATED_LIST_REQUEST',
      payload: 1,
    });
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});

describe('My Lists: addMovieToListLogic', () => {
  const request = {
    method: 'post',
  };
  const httpClient = httpClientMock(request);

  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      listId: 100,
      movieId: 555,
    },
  };

  addMovieToListLogic.process({ httpClient, action }, dispatch, done);

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});
