import { normalize } from 'normalizr';
import { getListDetailsLogic, deleteMovieFromListLogic } from '../logic';
import { Movies } from '../../../schema';
import { httpClientMock } from '../../../helpers';

describe('List Details: getListDetailsLogic', () => {
  describe('Response SUCCESS', () => {
    const request = {
      method: 'get',
      response: {
        data: {
          items: [{ id: 1 }, { id: 2 }],
          item_count: 33,
        },
      },
    };

    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: {
        id: 1,
      },
    };
    const httpClient = httpClientMock(request);
    getListDetailsLogic.process({ httpClient, action }, dispatch, done);

    const { data } = request.response;
    const { entities, result } = normalize(data.items, [Movies]);
    const id = action.payload;

    it('Should return correct URL', () => {
      expect(httpClient.get.mock.calls[0][0]).toBe(`/list/${id}`);
    });

    it('dispatches 2 action ', () => {
      expect(dispatch.mock.calls.length).toBe(2);
    });

    it('dispatches action - WRITE_TO_DATABASE', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'WRITE_TO_DATABASE',
        payload: {
          ...entities,
          lists: {},
          genres: {},
        },
      });
    });

    it('dispatches action - GET_LIST_DETAILS_RESPONSE', () => {
      const response = {
        ids: result,
        totalResults: data.item_count,
      };
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: 'GET_LIST_DETAILS_RESPONSE',
        payload: {
          ...response,
        },
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Response FAILURE', () => {
    const request = {
      method: 'get',
      response: {
        data: {
          items: [{ id: 1 }, { id: 2 }],
          item_count: 33,
        },
      },
      reject: true,
    };
    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: {
        id: 1,
      },
    };

    const httpClient = httpClientMock(request);
    getListDetailsLogic.process({ httpClient, action }, dispatch, done);

    it('dispatches 1 action ', () => {
      expect(dispatch.mock.calls.length).toBe(1);
    });

    it('Should dispatch action with error', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'GET_LIST_DETAILS_ERROR',
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });
});

describe('List Details: deleteMovieFromListLogic', () => {
  describe('Delete SUCCESS', () => {
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
    const { listId } = action.payload;

    it('Should return correct URL', () => {
      expect(httpClient.post.mock.calls[0][0]).toBe(
        `/list/${listId}/remove_item`,
      );
    });

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

  describe('Delete FAILURE', () => {
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
        movieId: 777,
      },
    };
    deleteMovieFromListLogic.process({ httpClient, action }, dispatch, done);

    it('Should throw Error', () => {
      expect(() => {
        throw new Error();
      }).toThrow();
    });
  });
});
