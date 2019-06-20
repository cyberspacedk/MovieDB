import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import FormItem from '../component';

describe('Component: FormItem', () => {
  const props = {
    field: {
      name: '',
    },
    form: {
      errors: {},
      touched: {},
    },
  };

  it('should match its snapshot.', () => {
    const formInput = shallow(<FormItem {...props} />);
    expect(shallowToJson(formInput)).toMatchSnapshot();
  });
});
