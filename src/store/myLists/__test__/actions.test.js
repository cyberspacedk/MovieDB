import {
  createListRequest,
  getCreatedListRequest,
  getCreatedListResponse,
  getCreatedListError,
  deleteListRequest,
  addMovieToListRequest,
} from '../actions';

describe('My Lists: actions', () => {
  it("should return - type:'CREATE_LIST_REQUEST and data for list creation '", () => {
    const expectedAction = {
      type: 'CREATE_LIST_REQUEST',
      payload: {
        name: 'Actions',
        description: 'About list',
      },
    };
    expect(createListRequest('Actions', 'About list')).toEqual(expectedAction);
  });

  it('should return - type: DELETE_LIST_REQUEST and id ', () => {
    const expectedAction = {
      type: 'DELETE_LIST_REQUEST',
      payload: 1,
    };
    expect(deleteListRequest(1)).toEqual(expectedAction);
  });

  it('should return - type: GET_CREATED_LIST_REQUEST and page ', () => {
    const expectedAction = {
      type: 'GET_CREATED_LIST_REQUEST',
      payload: 1,
    };
    expect(getCreatedListRequest(1)).toEqual(expectedAction);
  });

  it('should return - type: GET_CREATED_LIST_RESPONSE and data ', () => {
    const data = [1, 2, 3];
    const expectedAction = {
      type: 'GET_CREATED_LIST_RESPONSE',
      payload: data,
    };
    expect(getCreatedListResponse(data)).toEqual(expectedAction);
  });

  it('should return - type: ADD_MOVIE_TO_LIST_REQUEST and data for store movie', () => {
    const expectedAction = {
      type: 'ADD_MOVIE_TO_LIST_REQUEST',
      payload: {
        listId: 9,
        movieId: 797,
      },
    };
    expect(addMovieToListRequest(9, 797)).toEqual(expectedAction);
  });

  it('should return - type: GET_CREATED_LIST_ERROR', () => {
    const expectedAction = {
      type: 'GET_CREATED_LIST_ERROR',
    };
    expect(getCreatedListError()).toEqual(expectedAction);
  });
});
