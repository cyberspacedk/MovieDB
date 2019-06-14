import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import UserInfo, { mstp } from '../container';

describe('Container: UserInfo', () => {
  const initialState = {
    user: {
      username: 'movie__watcher',
      sessionId: '955360edb24b7e6d0179b7b4d6afdf5da2f56ada',
    },
  };
  const props = {
    username: 'movie__watcher',
    sessionID: true,
  };

  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<UserInfo store={store} {...props} />);
  });

  it('Snapshot: should match', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('MapStateToProps', () => {
    expect(mstp(initialState)).toEqual(props);
  });
});
