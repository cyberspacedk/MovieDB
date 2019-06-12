import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import UserInfo from '../components/Header/UserInfo/component';

describe('Component: UserInfo', () => {
  const props = {
    userName: 'USERNAME',
    logout() {},
  };

  it('should match its snapshot. Display username', () => {
    const UserInfoComponent = shallow(<UserInfo {...props} />);
    expect(shallowToJson(UserInfoComponent)).toMatchSnapshot();
  });
});
