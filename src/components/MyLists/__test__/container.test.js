import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import MyListsContainer from '../container';

describe('Container: MyListsContainer', () => {
  const store = configureStore()({
    myLists: {
      ids: [1, 2, 3],
      total_results: 10,
      current_page: 2,
      loading: false,
      error: false,
    },
    database: {
      lists: {
        1: { id: 1 },
      },
    },
  });

  const wrapper = shallow(<MyListsContainer store={store} />);
  const container = wrapper.dive();

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });
});
