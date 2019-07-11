import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import WishlistContainer from '../container';
import { getWatchListRequest } from '../../../store/watchList/actions';

describe('Wishlist container', () => {
  const store = configureStore()({
    watchlist: {
      ids: [],
      loading: false,
      error: null,
    },
    database: {
      movies: {},
    },
  });
  store.dispatch = jest.fn();

  const wrapper = shallow(<WishlistContainer store={store} />);
  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  describe('componentDidMount()', () => {
    it('should call getWatchListRequest action', () => {
      instance.componentDidMount();

      expect(store.dispatch).toHaveBeenCalledWith(getWatchListRequest());
    });
  });
});
