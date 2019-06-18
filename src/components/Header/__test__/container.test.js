import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ParentForm from '../container';

describe('Container: Header', () => {
  const store = configureStore()({});
  const wrapper = shallow(<ParentForm store={store} />).dive();

  it('Snapshot: should match', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        isLogin: expect.any(Boolean),
      }),
    );
  });
});
