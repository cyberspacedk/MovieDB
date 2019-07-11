import React from 'react';
import { shallow } from 'enzyme';
import CreateListAction from '../component';

describe('Component: CreateListAction', () => {
  const props = {
    visiblePop: false,
    visibleMod: false,
    showPopover: jest.fn(),
    showDialog: jest.fn(),
    hideModal: jest.fn(),
    addMovieToList: jest.fn(),
    myLists: [{}],
    movieId: 777,
  };

  const wrapper = shallow(<CreateListAction {...props} />);

  it('Match its snapshot. Item provided', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
