import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import WatchListContainer from '../container';
import { getWatchListRequest } from '../../../store/watchList/actions';

describe('WatchListContainer ', () => {
  const store = configureStore()({
    watchlist: {
      error: false,
      loading: true,
      total_results: 1,
      ids: [1],
      current_page: 2,
    },
    database: {
      movies: { 1: {} },
    },
  });

  store.dispatch = jest.fn();

  const wrapper = shallow(<WatchListContainer store={store} />);
  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('should call getWatchListRequest action', () => {
    instance.componentDidMount();
    expect(store.dispatch).toHaveBeenCalledWith(getWatchListRequest());
  });

  it('check class method', () => {
    instance.goToNextPage(5);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'GET_WATCHLIST_REQUEST',
      payload: 5,
    });
  });

  it('Map state and dispatch to props', () => {
    expect(container.props()).toEqual(
      expect.objectContaining({
        watchList: expect.any(Array),
        loading: expect.any(Boolean),
        error: expect.any(Boolean),
        empty: expect.any(Boolean),
        totalResults: expect.any(Number),
        currentPage: expect.any(Number),
        getWatchListRequest: expect.any(Function),
        operationsWatchListRequest: expect.any(Function),
      }),
    );
  });
});
