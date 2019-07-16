import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import FavoriteActionConnected from '../container';

describe('CreateListActionConnected ', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();

  const props = {
    movieId: 777,
  };
  const wrapper = shallow(<FavoriteActionConnected store={store} {...props} />);
  const container = wrapper.dive();
  const instance = container.instance();

  // const container = shallow(<FavoriteActionContainer {...props} />);

  // const instanceWrapper = wrapper.instance();
  // const instance = container.instance();

  // console.log(wrapper.debug());
  // console.log(container.debug());

  // console.log(instanceWrapper);
  // console.log(instance);

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check class method. Should update state field "favoriteStatus" adn dispatch action', () => {
    instance.handleFavorite();

    expect(container.state('favoriteStatus')).toBeTruthy();
    expect(store.dispatch).toHaveBeenNthCalledWith(1, {
      type: 'OPERATIONS_FAVORITES_REQUEST',
      payload: {
        movieId: 777,
        whatToDo: true,
      },
    });
  });
});
