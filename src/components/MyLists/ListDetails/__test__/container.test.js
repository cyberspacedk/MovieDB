import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ListDetailsContainer from '../container';

describe('Container: ListDetailsContainer', () => {
  const props = {
    getCreatedListRequest: jest.fn(),
    getListDetailsRequest: jest.fn(),
  };
  const store = configureStore()({
    listDetails: {
      ids: [1, 2, 3],
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

  // как передать второй параметр в mstp
  xit('Snapshot: should match', () => {
    const wrapper = shallow(<ListDetailsContainer store={store} {...props} />);
    const container = wrapper.dive();
    expect(container).toMatchSnapshot();
  });
});
