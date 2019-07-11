import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import CreateListActionConnected from '../container';

describe('FavoritesContainer ', () => {
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
  const container = wrapper.dive();
  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  xit('should update the count by 1 when invoked by default', () => {
    expect(instance.state('visiblePop')).toBeFalsy();
    instance.showPopover();
    expect(container.state('visiblePop')).toBe('visible');
  });

  xit('Check is calling container method.', () => {
    const wrapper = mount(<CreateListActionConnected store={store} />);
    const container = wrapper.find('CreateListActionContainer').instance();
    jest.spyOn(container, 'showPopover');
    container.showPopover = jest.fn();
    container.showPopover();
    expect(container.showPopover).toHaveBeenCalled();
  });

  xit('Map state and dispatch to props', () => {
    expect(container.props()).toEqual(
      expect.objectContaining({
        favorites: expect.any(Array),
        getCreatedListRequest: expect.any(Function),
        addMovieToListRequest: expect.any(Function),
      }),
    );
  });
});
