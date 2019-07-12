/* eslint-disable no-unused-vars */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import LoginForm, {
  mapPropsToValues,
  validationSchema,
  handleSubmit,
} from '../container';
import { authRequest } from '../../../../store/authentifiction/actions';

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

  const wrapper = mount(<LoginForm store={store} {...props} />);
  const container = wrapper.find('LoginForm');

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });

  xit('Check: map dispatch to props', () => {
    expect(container.props().isFailAuth).toEqual(
      expect.objectContaining({
        isFailAuth: expect.any(Boolean),
      }),
    );
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

  xit('check call handlesubmit and function inside', () => {
    const resetForm = jest.fn();
    const values = {
      username: 'name',
      password: '219fsf',
      rememberMe: false,
    };
    const params = {
      props: {
        authRequest,
      },
      resetForm: jest.fn(),
    };
    handleSubmit(values, params);

    const spy = jest.spyOn(store, 'dispatch');
    expect(store.dispatch).toHaveBeenCalledWith(authRequest(values));
  });
});
