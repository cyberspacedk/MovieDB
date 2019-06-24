import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import HomeContainer from '../container';

describe('Container: HomeContainer', () => {
  const store = configureStore()({
    user: {
      username: 'fakeuser',
      sessionId: '12345',
    },
  });

  const wrapper = shallow(<HomeContainer store={store} />).dive();

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
