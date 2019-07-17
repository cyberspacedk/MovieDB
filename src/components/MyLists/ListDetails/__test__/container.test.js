import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ListDetailsContainer from '../container';

describe('Container: ListDetailsContainer', () => {
  const props = {
    match: {
      params: {
        id: 999,
      },
    },
  };
  const store = configureStore()({
    listDetails: {
      ids: [1],
      totalResults: 10,
      loading: false,
      error: false,
    },
    database: {
      lists: {
        1: { id: 1, name: 'Comedy' },
      },
      movies: {
        1: { id: 1 },
      },
    },
  });

  store.dispatch = jest.fn();

  const wrapper = shallow(<ListDetailsContainer store={store} {...props} />);
  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check call lifeCycleMethod componentDidMount. Should dispatch 2 actions', () => {
    instance.componentDidMount();

    expect(store.dispatch).toHaveBeenNthCalledWith(1, {
      type: 'GET_CREATED_LIST_REQUEST',
      payload: 1,
    });

    expect(store.dispatch).toHaveBeenNthCalledWith(2, {
      type: 'GET_LIST_DETAILS_REQUEST',
      payload: 999,
    });
  });
});
