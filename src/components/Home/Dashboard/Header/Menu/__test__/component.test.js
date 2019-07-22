import React from 'react';
import { shallow } from 'enzyme';
import UserMenu from '../component';

describe('Component: UserMenu', () => {
  const props = {
    username: 'User-1',
  };
  const container = shallow(<UserMenu {...props} />);

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });
});
