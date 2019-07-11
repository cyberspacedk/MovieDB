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
  };

  it('Match its snapshot. Array provided', () => {
    const wrapper = shallow(
      <Favorites {...props} title="Favorites" removeBox />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
