import React from 'react';
import { shallow } from 'enzyme';
import Overlay from '../component';

describe('Component: UserMenu', () => {
  const props = {
    handleLogout: jest.fn(),
  };
  const container = shallow(<Overlay {...props} />);

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });
});
