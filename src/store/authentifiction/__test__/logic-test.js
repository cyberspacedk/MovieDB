import { authUserLogic, userLogoutLogic } from '../logic';
import httpClientMock, {
  multiHttpClientMock,
} from '../../../utils/testHelpers/httpClientMock';

// USER LOGIN
describe('authUserLogic operation', () => {
  const httpClient = multiHttpClientMock({
    method: 'get' || 'post',
    response: {
      data: {},
    },
  });

  const getState = jest.fn();
  const done = jest.fn();
  const dispatch = jest.fn(() => done());
  const action = { payload: {} };
  getState.mockReturnValue({
    user: {},
  });

  authUserLogic.process({ httpClient, getState, action }, dispatch, done);

  it('dispatches action - SET_USER_DATA', () => {
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'SET_USER_DATA',
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
