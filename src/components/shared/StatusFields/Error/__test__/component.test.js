import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Error from '../component';

describe('Component: Error', () => {
  it('Match its snapshot.', () => {
    const wrapper = shallow(<Error />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
