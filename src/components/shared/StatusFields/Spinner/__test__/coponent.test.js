import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Spinner from '../component';

describe('Component: Spinner', () => {
  it('Match its snapshot.', () => {
    const wrapper = shallow(<Spinner />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
