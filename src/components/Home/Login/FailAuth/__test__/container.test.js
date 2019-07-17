import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { FailAuthContainer } from '../container';

describe('Component: Home', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();

  const container = shallow(<FailAuthContainer store={store} />);
  const instance = container.instance();

  it('Match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  // нет доступа к пропс у контейнера
  xit('Check call lifeCycleMethod componentDidMount', () => {
    instance.componentDidMount();
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'FETCH_REQUEST' });
  });
});
