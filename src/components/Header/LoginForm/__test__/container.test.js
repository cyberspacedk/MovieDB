/* eslint-disable no-unused-vars */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import LoginForm, { mapPropsToValues } from '../container';

configure({ adapter: new Adapter() });

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
    onSubmit: jest.fn(),
  };

  const mockStore = configureStore();
  const onChange = jest.fn();

  const store = mockStore(initialState);
  const wrapper = mount(<LoginForm store={store} {...props} />);
  const forma = wrapper.find('form');

  it('Snapshot: should match', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Check: mapPropsToValues function', () => {
    expect(mapPropsToValues()).toEqual({
      username: '',
      password: '',
    });
  });

  /* it('check input username onChange event', () => {
    const inputUsername = forma.find('input[name="username"]');

    inputUsername.simulate('change', {
      persist: () => {},
      target: {
        name: 'username',
        value: 'fakeuser',
      },
    });
    const newValue = inputUsername.props().value;

    expect(newValue).toEqual('fakeuser');
  });

  forma.find('input[name="password"]').simulate('change', {
    target: {
      value: 'fakepassword123',
    },
  }); */
});
