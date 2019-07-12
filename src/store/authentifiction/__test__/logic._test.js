import { authUserLogic, userLogoutLogic } from '../logic';
import { httpClientMock, multiHttpClientMock } from '../../../helpers';

describe('Auth: authUserLogic', () => {
  describe('Succes response', () => {
    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: {
        username: 'somename',
        password: 'qwerty123',
      },
    };
    const requests = [
      { method: 'get', response: { data: { request_token: 'token' } } },
      { method: 'post', response: {} },
      { method: 'post', response: { data: { session_id: '465sdc3awa' } } },
    ];

    const httpClient = multiHttpClientMock(requests);

    authUserLogic.process({ httpClient, action }, dispatch, done);

    it('dispatches action - AUTH_SUCCESS', () => {
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'AUTH_SUCCESS',
        payload: {
          username: 'somename',
          sessionId: '465sdc3awa',
        },
      });
    });

    it('calls done', () => {
      expect(done.mock.calls.length).toBe(1);
    });
  });

  describe('Response with error', () => {
    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: {
        username: 'somename',
        password: 'qwerty123',
      },
    };
    const requests = [{ method: 'get', response: {} }];
    const httpClient = multiHttpClientMock(requests);
    authUserLogic.process({ httpClient, action }, dispatch, done);

    it('dispatches action - AUTH_ERROR', () => {
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'AUTH_ERROR',
      });
    });

    it('calls done', () => {
      expect(done.mock.calls.length).toBe(1);
    });
  });
});

describe('Auth: userLogoutLogic', () => {
  describe('Response success', () => {
    const httpClient = httpClientMock({
      method: 'delete',
    });

    const done = jest.fn();
    const dispatch = jest.fn();

    userLogoutLogic.process({ httpClient }, dispatch, done);

    it('dispatches action - AUTH_LOGOUT', () => {
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'AUTH_LOGOUT',
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Response fail', () => {
    const httpClient = httpClientMock({
      method: 'get',
    });

    const done = jest.fn();
    const dispatch = jest.fn();

    userLogoutLogic.process({ httpClient }, dispatch, done);

    it('dispatches action - AUTH_ERROR', () => {
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'AUTH_ERROR',
      });
    });

    it('calls done', () => {
      expect(done.mock.calls.length).toBe(1);
    });
  });
});
