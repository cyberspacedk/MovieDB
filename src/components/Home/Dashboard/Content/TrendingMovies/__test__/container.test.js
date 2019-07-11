import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import TrendingMoviesConnected from '../container';
import { fetchDataRequest } from '../../../../../../store/trendingMovies/actions';

describe('TrendingMoviesContainer ', () => {
  const store = configureStore()({
    trending: {
      loading: false,
      ids: [1],
      error: false,
    },
    database: {
      movies: { 1: { id: 1, overview: 'some text' } },
    },
  });
  store.dispatch = jest.fn();

  const wrapper = shallow(<TrendingMoviesConnected store={store} />);
  const container = wrapper.dive();
  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  xit('Check call lifeCycleMethod componentDidMount', () => {
    instance.componentDidMount();
    expect(store.dispatch).toHaveBeenCalledWith(fetchDataRequest());
  });

  it('Map state and dispatch to props', () => {
    expect(container.props()).toEqual(
      expect.objectContaining({
        topFilms: expect.any(Array),
        loading: expect.any(Boolean),
        error: expect.any(Boolean),
        fetchDataRequest: expect.any(Function),
      }),
    );
  });
});
