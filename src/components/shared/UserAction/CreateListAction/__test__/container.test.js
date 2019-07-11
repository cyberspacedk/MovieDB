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
  const container = wrapper.dive();
  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  xit('should update the count by 1 when invoked by default', () => {
    expect(instance.state('visiblePop')).toBeFalsy();
    instance.showPopover();
    expect(container.state('visiblePop')).toBe('visible');
  });

  xit('Check is calling container method.', () => {
    jest.spyOn(instance, 'showPopover');
    instance.showPopover = jest.fn();
    instance.showPopover();
    expect(instance.showPopover).toHaveBeenCalled();
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
