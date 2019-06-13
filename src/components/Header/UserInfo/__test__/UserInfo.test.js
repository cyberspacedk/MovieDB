import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import UserInfo from '../component';

describe('Component: UserInfo', () => {
  const props = {
    username: 'USERNAME',
    userLogout() {},
  };

  it('should match its snapshot. Display username', () => {
    const UserInfoComponent = shallow(<UserInfo {...props} />);
    expect(shallowToJson(UserInfoComponent)).toMatchSnapshot();
  });
});
