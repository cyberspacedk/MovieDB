import { createMockStore } from 'redux-logic-test';
import { authUserLogic } from '../logic';
import setUserDataReducer from '../reducers';

describe('applogic test without reducer', () => {
  const authlogic = [authUserLogic];

  const injectedDeps = {
    httpClient: {
      get() {
        return Promise.resolve({
          username: 'some name',
          sessionId: 'sd874v3s',
        });
      },
    },
  };
  const initialState = {
    username: '',
    sessionId: '',
  };
  const store = createMockStore({
    logic: authlogic,
    injectedDeps,
    reducer: setUserDataReducer,
    initialState,
  });

  it('should store username and sessionId', done => {
    store.dispatch({ type: 'AUTH_USER' });

    store.whenComplete(() => {
      expect(store.getState()).toEqual({
        username: 'some name',
        sessionId: 'sd874v3s',
      });
      expect(store.actions).toEqual([
        {
          type: 'AUTH_USER',
        },
        {
          type: 'SET_USER_DATA',
          payload: {
            username: 'some name',
            sessionId: 'sd874v3s',
          },
        },
      ]);

      done();
    });
  });
});
