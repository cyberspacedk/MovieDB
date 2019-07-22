import React from 'react';
import { shallow } from 'enzyme';
import SearchPanel from '../component';

describe('Component: SearchPanel', () => {
  const container = shallow(<SearchPanel />);

  it('Snapshot: should match. Display search results', () => {
    expect(container).toMatchSnapshot();
  });
});
