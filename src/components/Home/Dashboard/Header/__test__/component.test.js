import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from '../component';

describe('Component: Header', () => {
  const container = shallow(<PageHeader />);

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });
});
