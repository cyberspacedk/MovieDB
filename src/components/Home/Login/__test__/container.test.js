/* eslint-disable no-unused-vars */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import LoginForm, {
  mapPropsToValues,
  validationSchema,
  handleSubmit,
} from '../container';

describe('Container: LoginForm', () => {
  const props = {
    username: 'movie__watcher',
    sessionID: true,
  };

  const store = configureStore()({
    user: {
      username: 'movie__watcher',
      sessionId: '955360edb24b7e6d0179b7b4d6afdf5da2f56ada',
    },
  });
  store.dispatch = jest.fn();

  const wrapper = shallow(<LoginForm store={store} {...props} />);

  const container = wrapper
    .dive()
    .dive()
    .dive()
    .dive();

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check: mapPropsToValues function', () => {
    expect(mapPropsToValues()).toEqual({
      username: '',
      password: '',
    });
  });

  it('check validationSchema', () => {
    expect(validationSchema).toMatchSnapshot();
  });

  it('check call handlesubmit and function inside', () => {
    const values = {
      username: 'name',
      password: '219fsf',
      rememberMe: false,
    };
    const authRequest = jest.fn();
    const resetForm = jest.fn();
    const params = {
      props: {
        authRequest,
      },
      resetForm,
    };
    handleSubmit(values, params);
    expect(authRequest).toHaveBeenCalledWith({
      username: 'name',
      password: '219fsf',
    });
    expect(resetForm).toHaveBeenCalled();
  });
});
