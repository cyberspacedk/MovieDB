import React from 'react';
import { shallow } from 'enzyme';
import { FavoriteActionContainer } from '../container';

describe('CreateListActionConnected ', () => {
  const props = {
    operationsFavoritesRequest: jest.fn(),
    movieId: 777,
  };

  const wrapper = shallow(<FavoriteActionContainer {...props} />);

  it('Should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
