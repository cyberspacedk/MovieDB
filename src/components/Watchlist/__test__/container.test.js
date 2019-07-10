import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
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
  const container = wrapper.dive();

  it('Should match its snapshot', () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  it('Check call lifeCycleMethod componentDidMount', () => {
    mount(<WatchListContainer store={store} />);
    expect(store.dispatch).toHaveBeenCalledWith(getWatchListRequest());
  });

  it('Check is calling container method.', () => {
    const wrapper = mount(<WatchListContainer store={store} />);
    const container = wrapper.find('WatchListContainer').instance();
    jest.spyOn(container, 'goToNextPage');
    container.goToNextPage();
    expect(container.goToNextPage).toHaveBeenCalled();
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
