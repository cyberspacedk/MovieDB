import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../component';

describe('Component: Spinner', () => {
  it('Match its snapshot.', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });
});
