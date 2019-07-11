import React from 'react';
import { shallow } from 'enzyme';
import PopoverButton from '../component';

describe('Component: PopoverButton', () => {
  const props = {
    handlerAddMovieToList: jest.fn(),
    item: { name: 'John' },
  };

  const wrapper = shallow(<PopoverButton {...props} />);

  it('Match its snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
