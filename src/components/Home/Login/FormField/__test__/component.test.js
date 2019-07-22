import React from 'react';
import { shallow } from 'enzyme';
import FormField from '../component';

describe('Component: FormField', () => {
  const props = {
    field: {
      name: 'password',
    },
    form: {
      errors: {},
      touched: {},
    },
  };

  it('should match its snapshot. Field without errors', () => {
    const container = shallow(<FormField {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should match its snapshot. Field with error', () => {
    const nextProps = {
      ...props,
      form: {
        errors: {
          ...props.form.errors,
          password: 'Too short password',
        },
        touched: {
          ...props.form.touched,
          password: 'Required',
        },
      },
    };
    const container = shallow(<FormField {...nextProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should match its snapshot. Field name empty', () => {
    const nextProps = {
      ...props,
      field: {
        name: '',
      },
    };
    const container = shallow(<FormField {...nextProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should match its snapshot. Field name = username', () => {
    const nextProps = {
      ...props,
      field: {
        name: 'username',
      },
    };
    const container = shallow(<FormField {...nextProps} />);
    expect(container).toMatchSnapshot();
  });
});
