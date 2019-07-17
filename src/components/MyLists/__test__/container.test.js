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
  store.dispatch = jest.fn();

  const wrapper = shallow(<MyListsContainer store={store} />);
  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check call lifeCycleMethod componentDidMount', () => {
    instance.componentDidMount();

    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'GET_CREATED_LIST_REQUEST',
      payload: 1,
    });
  });

  it('Check class method showModal. Should change state field "visibleMod"', () => {
    instance.showModal();
    expect(container.state('visibleMod')).toBeTruthy();
  });

  it('Check class method hideModal. Should change state field "visibleMod"', () => {
    instance.hideModal();
    expect(container.state('visibleMod')).toBeFalsy();
  });

  it('Check class method goToNextPage. Should dispatch action ', () => {
    instance.goToNextPage(7);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'GET_CREATED_LIST_REQUEST',
      payload: 7,
    });
  });
});
