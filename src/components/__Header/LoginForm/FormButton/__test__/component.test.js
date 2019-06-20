import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import FormButton from '../component';

describe('Component: FormButton', () => {
  const props = {
    form: {
      errors: {},
      touched: {},
    },
  };

  it('should match its snapshot.', () => {
    const button = shallow(<FormButton {...props} />);
    expect(shallowToJson(button)).toMatchSnapshot();
  });
});
