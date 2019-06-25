import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from '../component';

describe('Component: Header', () => {
  const mockClick = jest.fn();

  const props = {
    username: 'USERNAME',
    userLogout: mockClick,
  };
  const HeaderComponent = shallow(<Header {...props} />);

  it('Snapshot: should match', () => {
    expect(shallowToJson(HeaderComponent)).toMatchSnapshot();
  });

  it('Simulate: click on button. Logout', () => {
    HeaderComponent.find('[type="primary"]').simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('Content: shoud match to props', () => {
    expect(HeaderComponent.find('span').text()).toEqual(props.username);
  });
});
