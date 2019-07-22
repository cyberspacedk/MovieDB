import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../component';

describe('Component: Dashboard', () => {
  it('Match its snapshot. Display Dashboard', () => {
    const container = shallow(<Dashboard />);
    expect(container).toMatchSnapshot();
  });
});
