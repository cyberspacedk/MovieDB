import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import UserInfo from '../container';

describe('Container: UserInfo', () => {
  const store = configureStore()({});

  const wrapper = shallow(<UserInfo store={store} />).dive();

  it('Snapshot: should match', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        username: expect.any(String),
        sessionID: expect.any(Boolean),
        userLogout: expect.any(Function),
      }),
    );
  });
});