import React from 'react';
import { shallow } from 'enzyme';
import CreateListField from '../component';

describe('Component: CreateListField', () => {
  const props = {
    field: {
      name: 'name',
    },
    form: {
      touched: {
        name: '',
      },
      errors: {
        name: '',
      },
    },
  };

  const wrapper = shallow(<CreateListField {...props} />);

  it('Match its snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Match its snapshot. Validation errors', () => {
    const nextProps = {
      ...props,
      form: {
        touched: {
          name: 'required',
        },
        errors: {
          name: 'required',
        },
      },
    };
    const wrapper = shallow(<CreateListField {...nextProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
