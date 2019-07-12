import React from 'react';
import { shallow } from 'enzyme';
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

  const wrapper = shallow(<MoviesContainer store={store} />);
  const container = wrapper.dive();

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });
});
