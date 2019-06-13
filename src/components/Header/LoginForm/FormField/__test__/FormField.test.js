import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import FormItem from '../component';

describe('Component: FormItem', () => {
  const props = {
    type: 'text',
    name: 'username',
    placeHolder: 'Username',
    value: {
      username: 'Sam',
    },
    errors: {},
    touched: {},
  };

  it('should match its snapshot.', () => {
    const UserInfoComponent = shallow(<FormItem {...props} />);
    expect(shallowToJson(UserInfoComponent)).toMatchSnapshot();
  });
});
