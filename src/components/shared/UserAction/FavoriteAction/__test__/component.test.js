import React from 'react';
import { shallow } from 'enzyme';
import FavoriteAction from '../component';

describe('Component: CreateListAction', () => {
  it('Match its snapshot.', () => {
    const props = {
      handleFavorite: jest.fn(),
      favoriteStatus: false,
    };

    const wrapper = shallow(<FavoriteAction {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Match its snapshot.', () => {
    const props = {
      handleFavorite: jest.fn(),
      favoriteStatus: true,
    };
    const wrapper = shallow(<FavoriteAction {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
