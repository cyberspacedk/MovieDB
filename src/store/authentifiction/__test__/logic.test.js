import Cookies from 'js-cookie';
import { authUserLogic, userLogoutLogic } from '../logic';
import { httpClientMock, multiHttpClientMock } from '../../../helpers';

describe('Auth: authUserLogic', () => {
  describe('Response SUCCESS', () => {
    const requests = [
      { method: 'get', response: { data: { request_token: 'token' } } },
      { method: 'post', response: {} },
      { method: 'post', response: { data: { session_id: '465sdc3awa' } } },
    ];

    Cookies.set = jest.fn();
    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: {
        username: 'somename',
        password: 'qwerty123',
      },
    };

    const httpClient = multiHttpClientMock(requests);

    authUserLogic.process({ httpClient, action }, dispatch, done);

    it('Should return correct request URL', () => {
      expect(httpClient.get.mock.calls[0][0]).toBe(`authentication/token/new`);

      expect(httpClient.post.mock.calls[0][0]).toBe(
        `authentication/token/validate_with_login`,
      );

      expect(httpClient.post.mock.calls[1][0]).toBe(
        `authentication/session/new`,
      );
    });

    it('dispatches action - AUTH_SUCCESS', () => {
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'AUTH_SUCCESS',
        payload: {
          username: 'somename',
          sessionId: '465sdc3awa',
        },
      });
    });

    it('Should set data to cookie ', () => {
      expect(Cookies.set).toHaveBeenNthCalledWith(
        1,
        'SESSION_ID',
        '465sdc3awa',
      );
      expect(Cookies.set).toHaveBeenNthCalledWith(2, 'USERNAME', 'somename');
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Response FAILURE', () => {
    const requests = [{ method: 'get', response: {}, reject: true }];

    const done = jest.fn();
    const dispatch = jest.fn();
    const action = {
      payload: {
        username: 'somename',
        password: 'qwerty123',
      },
    };
    const httpClient = multiHttpClientMock(requests);
    authUserLogic.process({ httpClient, action }, dispatch, done);

    it('dispatches action - AUTH_ERROR', () => {
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'AUTH_ERROR',
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });
});

describe('Auth: userLogoutLogic', () => {
  describe('Response SUCCESS', () => {
    const httpClient = httpClientMock({
      method: 'delete',
    });

    Cookies.remove = jest.fn();
    const done = jest.fn();
    const dispatch = jest.fn();

    userLogoutLogic.process({ httpClient }, dispatch, done);

    it('Should return correct request URL', () => {
      expect(httpClient.delete.mock.calls[0][0]).toBe(`authentication/session`);
    });

    it('dispatches action - AUTH_LOGOUT', () => {
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'AUTH_LOGOUT',
      });
    });

    it('Should set data to cookie ', () => {
      expect(Cookies.remove).toHaveBeenNthCalledWith(1, 'SESSION_ID');
      expect(Cookies.remove).toHaveBeenNthCalledWith(2, 'USERNAME');
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });

  describe('Response FAILURE', () => {
    const httpClient = httpClientMock({
      method: 'get',
      reject: true,
    });

    const done = jest.fn();
    const dispatch = jest.fn();

    userLogoutLogic.process({ httpClient }, dispatch, done);

    it('dispatches action - AUTH_ERROR', () => {
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: 'AUTH_ERROR',
      });
    });

    it('calls done', () => {
      expect(done).toBeCalled();
    });
  });
});
