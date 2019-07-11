import {
  getCreatedListError,
  getListDetailsRequest,
  getListDetailsResponse,
  deleteMovieFromListRequest,
} from '../actions';

describe('List Details: actions', () => {
  it("should return - type:'GET_LIST_DETAILS_ERROR'", () => {
    const expectedAction = {
      type: 'GET_LIST_DETAILS_ERROR',
    };
    expect(getCreatedListError()).toEqual(expectedAction);
  });

  it('should return - type: GET_LIST_DETAILS_REQUEST and list id', () => {
    const expectedAction = {
      type: 'GET_LIST_DETAILS_REQUEST',
      payload: 99,
    };
    expect(getListDetailsRequest(99)).toEqual(expectedAction);
  });

  it('should return - type: GET_LIST_DETAILS_RESPONSE and list data ', () => {
    const data = {
      ids: 77,
      totalResults: 3,
    };
    const expectedAction = {
      type: 'GET_LIST_DETAILS_RESPONSE',
      payload: data,
    };
    expect(getListDetailsResponse(data)).toEqual(expectedAction);
  });

  it('should return - type: DELETE_MOVIE_FROM_LIST_REQUEST and data for request ', () => {
    const expectedAction = {
      type: 'DELETE_MOVIE_FROM_LIST_REQUEST',
      payload: {
        listId: 9,
        movieId: 157,
      },
    };
    expect(deleteMovieFromListRequest(9, 157)).toEqual(expectedAction);
  });
});
