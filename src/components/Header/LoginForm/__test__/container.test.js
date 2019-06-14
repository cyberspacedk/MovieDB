/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import LoginForm, { mapPropsToValues } from '../container';

describe('Container: LoginForm', () => {
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
  const mockClick = jest.fn();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<LoginForm store={store} {...props} />);
  });

  it('Snapshot: should match', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  /* it('Simulate: Form submit with userData', () => {
    const forma = wrapper.find('form');

    forma.find('[name="username"]').simulate('change', {
      target: {
        name: 'username',
        value: 'fakeuser',
      },
    });

    forma.find('[name="password"]').simulate('change', {
      target: {
        name: 'password',
        value: 'fakepassword123',
      },
    });

    forma.simulate('submit', { preventDefault() {} });

    expect(mockLoginfn).toEqual({
      username: 'fakeuser',
      password: 'fakepassword123',
    });
  }); */

  it('Check: mapPropsToValues function', () => {
    expect(mapPropsToValues()).toEqual({
      username: '',
      password: '',
    });
  });
});
