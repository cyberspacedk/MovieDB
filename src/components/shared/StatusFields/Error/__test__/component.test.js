import React from 'react';
import { shallow } from 'enzyme';
import Error from '../component';

describe('Component: Error', () => {
  it('Match its snapshot.', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper).toMatchSnapshot();
  });
});
