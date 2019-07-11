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

  it('dispatches action - GET_CREATED_LIST_REQUEST', () => {
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'GET_CREATED_LIST_REQUEST',
      payload: 1,
    });
    expect(action.formikBag.setStatus).toHaveBeenCalled();
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});

describe('My Lists: getCreatedListLogic', () => {
  const request = {
    method: 'get',
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

  it('dispatches action - GET_CREATED_LIST_RESPONSE', () => {
    // запускает экшн в catch
    // console.log(dispatch.mock.calls);
    expect(dispatch.mock.calls.length).toBe(1);
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

  it('dispatches action - GET_CREATED_LIST_REQUEST', () => {
    expect(dispatch.mock.calls.length).toBe(1);
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
