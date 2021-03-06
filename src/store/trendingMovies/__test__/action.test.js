import { fetchDataRequest, fetchDataError, fetchDataSuccess } from '../actions';

describe('actions', () => {
  describe('sync action', () => {
    it('should return type: "FETCH_REQUEST"', () => {
      const expectedAction = {
        type: 'FETCH_REQUEST',
      };
      expect(fetchDataRequest()).toEqual(expectedAction);
    });

    it('should return type: FETCH_ERROR', () => {
      const message = 'error message';
      const expectedAction = {
        type: 'FETCH_ERROR',
      };
      expect(fetchDataError(message)).toEqual(expectedAction);
    });

    it('should return responce - array', () => {
      const response = [1, 2];
      const expectedAction = {
        type: 'FETCH_RESPONSE',
        payload: response,
      };
      expect(fetchDataSuccess(response)).toEqual(expectedAction);
    });
  });
});
