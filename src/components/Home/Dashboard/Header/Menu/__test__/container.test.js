import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import MenuContainer from '../container';

describe('Component: Home', () => {
  const store = configureStore()({
    user: {
      username: 'User-1',
      sessionId: 'jchdi3bmc99aj',
    },
  });
  store.dispatch = jest.fn();

  const wrapper = shallow(
    <BrowserRouter>
      <MenuContainer store={store} />
    </BrowserRouter>,
  );

  const container = wrapper
    .dive()
    .dive()
    .dive()
    .dive()
    .dive()
    .dive();

  const instance = container.dive().instance();

  it('Match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check call method.Should dispatch action', () => {
    instance.handleLogout();
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'AUTH_LOGOUT' });
  });

  it('Map state and dispatch to props', () => {
    expect(container.props()).toEqual(
      expect.objectContaining({
        username: expect.any(String),
        authLogout: expect.any(Function),
      }),
    );
  });
});
