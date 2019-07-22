import React from 'react';
import { shallow } from 'enzyme';
import FailAuth from '../component';

describe('Component: FailAuth', () => {
  const container = shallow(<FailAuth />);

  it('should match its snapshot.', () => {
    expect(container).toMatchSnapshot();
  });
});
