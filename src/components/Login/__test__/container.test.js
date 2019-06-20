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
import { authUser } from '../../../store/authentifiction/actions';

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

  // РАСПУТАТЬ
  it('check call handlesubmit and function inside', () => {
    /*  const spy = jest.spyOn(handleSubmit, 'resetForm');
    const called = handleSubmit(); */
    const resetForm = jest.fn();
    const values = {
      username: 'name',
      password: '219fsf',
      rememberMe: false,
    };
    const params = {
      props: {
        authUser,
      },
      resetForm: jest.fn(),
    };
    handleSubmit(values, params);

    mount(<LoginForm store={store} />);
    const spy = jest.spyOn(store, 'dispatch');
    expect(spy).toHaveBeenCalledWith(authUser(values));
    /* expect(handleSubmit.props()).toHaveBeenCalled(); */
  });
});
