import React from 'react';
import { shallow } from 'enzyme';
import FormButton from '../component';

describe('Component: FormButton', () => {
  const props = {
    form: {
      errors: {},
      touched: {},
    },
  };

  it('should match its snapshot. Active button', () => {
    const button = shallow(<FormButton {...props} />);
    expect(button).toMatchSnapshot();
  });

  it('should match its snapshot. Disabled button', () => {
    const nextProps = {
      form: {
        errors: {
          username: 'restricted symbol',
        },
        touched: {
          username: 'required',
        },
      },
    };
    const button = shallow(<FormButton {...nextProps} />);
    expect(button).toMatchSnapshot();
  });
  it('should match its snapshot. Disabled button', () => {
    const nextProps = {
      form: {
        errors: {
          password: 'too short',
        },
        touched: {
          password: 'required',
        },
      },
    };
    const button = shallow(<FormButton {...nextProps} />);
    expect(button).toMatchSnapshot();
  });
});
