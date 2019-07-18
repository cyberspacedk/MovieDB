import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import WatchListActionConnected from '../container';

describe('WatchListActionContainer ', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();

  const props = {
    movieId: 777,
  };

  const wrapper = shallow(
    <WatchListActionConnected store={store} {...props} />,
  );
  const container = wrapper.dive();
  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Check class method. Should update state field "watchListStatus" adn dispatch action', () => {
    instance.handleWatchList();

    expect(container.state('watchListStatus')).toBeTruthy();
    expect(store.dispatch).toHaveBeenNthCalledWith(1, {
      type: 'OPERATIONS_WATCHLIST_REQUEST',
      payload: {
        movieId: 777,
        whatToDo: true,
      },
    });
  });
});
