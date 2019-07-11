import React from 'react';
import { shallow } from 'enzyme';
import PopoverContent from '../component';

describe('Component: PopoverContent', () => {
  const props = {
    showDialog: jest.fn(),
    addMovieToList: jest.fn(),
    myLists: [{}],
    movieId: 777,
  };

  const wrapper = shallow(<PopoverContent {...props} />);

  it('Match its snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
