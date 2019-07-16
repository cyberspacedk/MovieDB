import {
  singleFilmRequest,
  singleFilmError,
  singleFilmSuccess,
} from '../actions';

describe('Single: actions', () => {
  it("should return - type:'SINGLE_REQUEST'", () => {
    const expectedAction = {
      type: 'SINGLE_REQUEST',
      payload: 33,
    };
    expect(singleFilmRequest(33)).toEqual(expectedAction);
  });

  it('should return - type: SINGLE_ERROR', () => {
    const expectedAction = {
      type: 'SINGLE_ERROR',
    };
    expect(singleFilmError()).toEqual(expectedAction);
  });

  it('should return - type: SINGLE_RESPONSE ', () => {
    const expectedAction = {
      type: 'SINGLE_RESPONSE',
    };
    expect(singleFilmSuccess()).toEqual(expectedAction);
  });
});
