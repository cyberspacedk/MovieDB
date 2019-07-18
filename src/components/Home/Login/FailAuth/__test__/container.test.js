import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import FailAuthContainer from '../container';

window.setTimeout = jest.fn().mockImplementation(fn => fn());

describe('Component: FailAuth', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();

  const wrapper = shallow(<FailAuthContainer store={store} />);
  const container = wrapper.dive();
  const instance = container.instance();

  it('Match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check call lifeCycleMethod componentDidMount', () => {
    instance.componentDidMount();
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'TRY_AGAIN' });
  });
});
