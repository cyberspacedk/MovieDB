import { normalize } from 'normalizr';
import { Lists } from '../../../schema';
import {
  createListLogic,
  getCreatedListLogic,
  deleteCreatedListLogic,
  addMovieToListLogic,
} from '../logic';
import { httpClientMock } from '../../../helpers';

describe('My Lists: createListLogic', () => {
  describe('Creation SUCCESS', () => {
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

    it('should set form status to SUCCESS', () => {
      expect(action.formikBag.setStatus).toHaveBeenCalledWith('SUCCESS');
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Creation FAILURE', () => {
    const request = {
      method: 'post',
      response: {
        err: {
          message: 'Smth went wrong',
        },
      },
      reject: true,
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

    it('dispatch shouldnt call', () => {
      expect(dispatch.mock.calls.length).toBeFalsy();
    });

    it('should set form status to FAILURE', () => {
      expect(action.formikBag.setStatus).toHaveBeenCalledWith('FAILURE');
    });

    it('should set form Error', () => {
      expect(action.formikBag.setErrors).toHaveBeenCalled();
    });
  });

  describe('Creation. Finally box', () => {
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

    it('should set form status to WAITING', () => {
      expect(action.formikBag.setStatus).toHaveBeenCalledWith('WAITING');
    });

    it('should set form Error', () => {
      expect(action.formikBag.setSubmitting).toHaveBeenCalledWith(false);
    });
  });
});

describe('My Lists: getCreatedListLogic', () => {
  describe('Get created list SUCCESS', () => {
    const request = {
      method: 'get',
      response: {
        data: {
          results: [{ id: 1 }, { id: 2 }],
          total_results: 77,
          page: 9,
        },
      },
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
    const { data } = request.response;
    const { entities, result } = normalize(data.results, [Lists]);
    const response = {
      ids: result,
      total_results: data.total_results,
      current_page: data.page,
    };

    it('dispatches 2 action ', () => {
      expect(dispatch.mock.calls.length).toBe(2);
    });

    it('dispatches action - WRITE_TO_DATABASE', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'WRITE_TO_DATABASE',
        payload: {
          movies: {},
          genres: {},
          ...entities,
        },
      });
    });

    it('dispatches action - GET_CREATED_LIST_RESPONSE', () => {
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: 'GET_CREATED_LIST_RESPONSE',
        payload: {
          ...response,
        },
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Get created list FAILURE', () => {
    const request = {
      method: 'get',
      response: {},
      reject: true,
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
      expect(dispatch.mock.calls.length).toBe(1);
    });

    it('dispatches action - WRITE_TO_DATABASE', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'GET_CREATED_LIST_ERROR',
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });
});

describe('My Lists: deleteCreatedListLogic', () => {
  describe('Delete created list SUCCESS', () => {
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
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'GET_CREATED_LIST_REQUEST',
        payload: 1,
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Delete created list FAILURE', () => {
    const request = {
      method: 'delete',
      reject: true,
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

    it('Should throw an Error', () => {
      expect(() => {
        throw new Error();
      }).toThrow();
    });
  });
});

describe('My Lists: addMovieToListLogic', () => {
  describe('Add movie to list SUCCESS', () => {
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
  describe('Add movie to list FAILURE', () => {
    const request = {
      method: 'post',
      reject: true,
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

    it('Should throw an Error', () => {
      expect(() => {
        throw new Error();
      }).toThrow();
    });
  });
});
