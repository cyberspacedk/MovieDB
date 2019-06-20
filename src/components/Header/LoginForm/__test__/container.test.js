/* eslint-disable no-unused-vars */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import LoginForm, {
  mapPropsToValues,
  validationSchema,
  handleSubmit,
} from '../container';

configure({ adapter: new Adapter() });

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
  const loginForm = wrapper.find('LoginForm');

  it('Snapshot: should match', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Check: map dispatch to props', () => {
    expect(loginForm.props()).toEqual(
      expect.objectContaining({
        authUser: expect.any(Function),
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

  describe('check call submit func and inner function', () => {
    const values = {
      user: 'dfsf',
      password: 'fdfsf',
      rememberMe: true,
    };
    const { rememberMe: _x, ...userData } = values;
    const formikProps = {
      props: {
        authUser: jest.fn(),
      },
      resetForm: jest.fn(),
    };

    handleSubmit(userData, formikProps);

    it('should call resetForm func', () => {
      expect(formikProps.resetForm).toHaveBeenCalled();
    });

    it('should dispatch action with user info', () => {
      expect(formikProps.props.authUser).toHaveBeenCalledWith(userData);
    });
  });
});
