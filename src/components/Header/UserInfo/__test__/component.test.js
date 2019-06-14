import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import UserInfo from '../component';

describe('Component: UserInfo', () => {
  const mockClick = jest.fn();

  const props = {
    username: 'USERNAME',
    userLogout: mockClick,
  };
  const UserInfoComponent = shallow(<UserInfo {...props} />);

  it('Snapshot: should match', () => {
    expect(shallowToJson(UserInfoComponent)).toMatchSnapshot();
  });

  it('Simulate: click on button. Logout', () => {
    UserInfoComponent.find('[type="primary"]').simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('Content: shoud match to props', () => {
    expect(UserInfoComponent.find('span').text()).toEqual(props.username);
  });
});
