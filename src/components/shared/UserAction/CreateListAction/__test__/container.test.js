import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CreateListActionConnected from '../container';

describe('CreateListActionConnected ', () => {
  const store = configureStore()({
    myLists: {
      ids: [1, 2, 3],
    },
    database: {
      lists: { 1: {} },
    },
  });

  store.dispatch = jest.fn();

  const wrapper = shallow(<CreateListActionConnected store={store} />);
  const container = wrapper.dive().dive();
  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('should update state property "visiblePop" and dispatch action', () => {
    instance.showPopover('visible');
    expect(container.state('visiblePop')).toBe('visible');
    expect(store.dispatch).toHaveBeenNthCalledWith(1, {
      type: 'GET_CREATED_LIST_REQUEST',
      payload: 1,
    });
  });

  it('should update state property "visiblePop"', () => {
    instance.hidePopover();
    expect(container.state('visiblePop')).toBeFalsy();
  });

  it('should update state property "visibleMod"', () => {
    instance.showModal();
    expect(container.state('visibleMod')).toBeTruthy();
  });

  it('should update state property "visibleMod"', () => {
    instance.hideModal();
    expect(container.state('visibleMod')).toBeFalsy();
  });

  it('should update state property "visiblePop" and dispatch action', () => {
    instance.addMovieToList(3, 55);
    expect(container.state('visiblePop')).toBeFalsy();
    expect(store.dispatch).toHaveBeenNthCalledWith(2, {
      type: 'ADD_MOVIE_TO_LIST_REQUEST',
      payload: {
        listId: 3,
        movieId: 55,
      },
    });
  });

  it('should update state property "visibleMod" and "visiblePop"', () => {
    instance.showDialog();
    expect(container.state('visibleMod')).toBeTruthy();
    expect(container.state('visiblePop')).toBeFalsy();
  });

  it('Map state and dispatch to props', () => {
    expect(container.props()).toEqual(
      expect.objectContaining({
        myLists: expect.any(Array),
        getCreatedListRequest: expect.any(Function),
        addMovieToListRequest: expect.any(Function),
      }),
    );
  });
});
