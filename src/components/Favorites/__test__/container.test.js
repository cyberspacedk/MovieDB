import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import FavoritesContainer from '../container';
import { getFavoritesRequest } from '../../../store/favorites/actions';

describe('FavoritesContainer ', () => {
  const store = configureStore()({
    favorites: {
      error: false,
      loading: true,
      total_results: 1,
      current_page: 2,
      ids: [1, 2, 3],
    },
    database: {
      movies: { 1: {} },
    },
  });

  store.dispatch = jest.fn();

  const wrapper = shallow(<FavoritesContainer store={store} />);
  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check call lifeCycleMethod componentDidMount', () => {
    instance.componentDidMount();
    expect(store.dispatch).toHaveBeenCalledWith(getFavoritesRequest());
  });

  it('check class method', () => {
    instance.goToNextPage(5);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'GET_FAVORITES_REQUEST',
      payload: 5,
    });
  });

  it('Map state and dispatch to props', () => {
    expect(container.props()).toEqual(
      expect.objectContaining({
        favorites: expect.any(Array),
        loading: expect.any(Boolean),
        error: expect.any(Boolean),
        empty: expect.any(Boolean),
        totalResults: expect.any(Number),
        currentPage: expect.any(Number),
        getFavoritesRequest: expect.any(Function),
        operationsFavoritesRequest: expect.any(Function),
      }),
    );
  });
});
