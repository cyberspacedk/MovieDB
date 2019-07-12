import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../component';

describe('Component: LoginForm', () => {
  const props = {
    isFailAuth: true,
  };

  it('Match its snapshot. Display Fail auth', () => {
    const container = shallow(<LoginForm {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('Match its snapshot. Display Login form ', () => {
    const nextProps = {
      isFailAuth: false,
    };
    const container = shallow(<LoginForm {...nextProps} />);
    expect(container).toMatchSnapshot();
  });
});
