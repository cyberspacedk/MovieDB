import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Movie from '../container';

describe('Movie  container', () => {
  const props = {
    match: {
      params: {
        id: 1,
      },
    },
  };
  const store = configureStore()({
    singleFilm: {
      error: false,
      loading: false,
    },
    database: {
      movies: { 1: { id: 1 } },
      genres: { 1: { id: 1 } },
    },
  });

  store.dispatch = jest.fn();

  const wrapper = shallow(<Movie store={store} {...props} />);

  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check call lifeCycleMethod componentDidMount', () => {
    instance.componentDidMount();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'SINGLE_REQUEST',
      payload: 1,
    });
  });
});
