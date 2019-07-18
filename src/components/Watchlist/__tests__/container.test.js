import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import WatchListContainer from '../container';
import { getWatchListRequest } from '../../../store/watchList/actions';

describe('WatchListContainer container', () => {
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

  const wrapper = shallow(<WatchListContainer store={store} />);
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
