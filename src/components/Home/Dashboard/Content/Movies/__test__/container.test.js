import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import MoviesContainer from '../container';

describe('Container: MoviesContainer', () => {
  const store = configureStore()({
    search: {
      ids: [1, 2, 3],
      page: 3,
      total_results: 10,
      loading: false,
      error: false,
      query: 'some film',
    },
    database: {
      movies: {
        1: { id: 1 },
      },
    },
  });

  store.dispatch = jest.fn();

  const wrapper = shallow(
    <BrowserRouter>
      <MoviesContainer store={store} />
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

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check is method calling. Should dispatch action', () => {
    instance.goToNextPage(3);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'SEARCH_REQUEST',
      payload: {
        query: 'some film',
        page: 3,
      },
    });
  });
});
