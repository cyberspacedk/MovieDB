import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import LoginForm from '../component';

describe('Component: LoginForm', () => {
  const props = {
    values: {},
    errors: {
      username: 'some errors in username field',
      password: 'some errors in password field',
    },
    touched: {},
  };

  it('should match its snapshot. Display errors in inputs', () => {
    const LoginFormComponent = shallow(<LoginForm {...props} />);
    expect(shallowToJson(LoginFormComponent)).toMatchSnapshot();
  });

  it('should match its snapshot. Display without errors in inputs', () => {
    const nextProps = {
      ...props,
      errors: {
        username: '',
        password: '',
      },
    };

    const LoginFormComponent = shallow(<LoginForm {...nextProps} />);
    expect(shallowToJson(LoginFormComponent)).toMatchSnapshot();
  });
});
