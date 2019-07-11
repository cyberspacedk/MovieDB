import { searchRequest, searchError, searchSuccess } from '../actions';

describe('Search: actions', () => {
  it("should return - type:'SEARCH_REQUEST'", () => {
    const expectedAction = {
      type: 'SEARCH_REQUEST',
      payload: 'sport',
      page: 1,
    };
    expect(searchRequest('sport', 1)).toEqual(expectedAction);
  });

  it('should return - type: SEARCH_ERROR', () => {
    const expectedAction = {
      type: 'SEARCH_ERROR',
    };
    expect(searchError()).toEqual(expectedAction);
  });

  it('should return - type: SEARCH_RESPONSE and found results ', () => {
    const data = {
      ids: [1, 2, 3],
      page: 2,
      total_results: 111,
    };
    const expectedAction = {
      type: 'SEARCH_RESPONSE',
      payload: data,
    };
    expect(searchSuccess(data)).toEqual(expectedAction);
  });
});
