import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from '../components/Header/component';

describe('Component: Header', () => {
  const props = {
    isLogin: false,
  };

  it('should match its snapshot. User doesnt logged in ', () => {
    const HeaderComponent = shallow(<Header {...props} />);
    expect(shallowToJson(HeaderComponent)).toMatchSnapshot();
  });

  it('should match its snapshot. User logged in ', () => {
    const nextProps = {
      isLogin: true,
    };
    const HeaderComponent = shallow(<Header {...nextProps} />);
    expect(shallowToJson(HeaderComponent)).toMatchSnapshot();
  });
});
