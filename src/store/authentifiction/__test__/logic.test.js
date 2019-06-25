import { authUserLogic, userLogoutLogic } from '../logic';
import httpClientMock, {
  multiHttpClientMock,
} from '../../../helpers/httpClientMock';

// РАЗОБРАТЬ МУЛЬТИ КЛИЕНТ
describe('authUserLogic operation', () => {
  const requests = [
    { method: 'get', response: { data: { request_token: 'token' } } },
    { method: 'post', response: {} },
    { method: 'post', response: { data: { session_id: '465sdc3awa' } } },
  ];

  const httpClient = multiHttpClientMock(requests);

  const getState = jest.fn();
  const done = jest.fn();
  const dispatch = jest.fn();
  const action = {
    payload: {
      username: 'somename',
      password: 'qwerty123',
    },
  };
  getState.mockReturnValue({
    user: {},
  });

  authUserLogic.process({ httpClient, getState, action }, dispatch, done);

  it('calls httpClient to get request token', () => {});

  it('dispatches action - SET_USER_DATA', () => {
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'SET_USER_DATA',
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

// USER LOGOUT
describe('userLogoutLogic operation', () => {
  const httpClient = httpClientMock({
    method: 'delete',
  });

  const getState = jest.fn();
  const done = jest.fn();
  const dispatch = jest.fn();

  getState.mockReturnValue({
    username: '',
    sessionId: '',
  });

  userLogoutLogic.process({ httpClient, getState }, dispatch, done);

  it('dispatches action - DELETE_SESSION_ID', () => {
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'DELETE_SESSION_ID',
    });
  });

  it('calls done', () => {
    expect(done).toBeCalled();
  });
});
