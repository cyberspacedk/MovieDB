import React from 'react';
import { shallow } from 'enzyme';
import FavoriteAction from '../component';

describe('Component: CreateListAction', () => {
  const props = {
    handleFavorite: jest.fn(),
    favoriteStatus: false,
  };

  const wrapper = shallow(<FavoriteAction {...props} />);

  it('Match its snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
