import React from 'react';
import { shallow } from 'enzyme';
import EmptyResult from '../component';

describe('Component: EmptyResult', () => {
  it('Match its snapshot.', () => {
    const wrapper = shallow(<EmptyResult />);
    expect(wrapper).toMatchSnapshot();
  });
});
