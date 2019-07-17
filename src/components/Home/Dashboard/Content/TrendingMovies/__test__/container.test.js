import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import TrendingMoviesConnected from '../container';

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

  const wrapper = shallow(
    <BrowserRouter>
      <TrendingMoviesConnected store={store} />
    </BrowserRouter>,
  );
  const container = wrapper
    .dive()
    .dive()
    .dive()
    .dive()
    .dive()
    .dive()
    .dive();

  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check call lifeCycleMethod componentDidMount', () => {
    instance.componentDidMount();
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'FETCH_REQUEST' });
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
