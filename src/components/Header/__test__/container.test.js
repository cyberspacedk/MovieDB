import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ParentForm, { mstp } from '../container';

describe('Container: Header', () => {
  const initialState = {
    user: {
      sessionId: 'jkdksjdnfjnsdnc',
    },
  };

  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<ParentForm store={store} />);
  });

  it('Snapshot: should match', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('MapStateToProps', () => {
    expect(mstp(initialState).isLogin).toBe(true);
  });
});
