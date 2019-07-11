import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import EmptyResult from '../component';

describe('Component: EmptyResult', () => {
  it('Match its snapshot.', () => {
    const wrapper = shallow(<EmptyResult />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
