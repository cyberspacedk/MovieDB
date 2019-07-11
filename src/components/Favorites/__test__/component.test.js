import React from 'react';
import { shallow } from 'enzyme';
import Favorites from '../component';

describe('Component: Favorites', () => {
  const props = {
    favorites: [{ id: 1, title: 'Some title', overview: 'Some description' }],
    loading: false,
    error: false,
    empty: false,
    currentPage: 1,
    totalResults: 25,
    history: {
      push: () => {},
    },
    operationsFavoritesRequest: () => {},
    goToNextPage: jest.fn(),
    title: 'Favorites',
    removeBox: true,
  };

  it('Match its snapshot. Array provided', () => {
    const wrapper = shallow(<Favorites {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
