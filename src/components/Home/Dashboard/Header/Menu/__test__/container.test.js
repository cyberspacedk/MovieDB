import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import MenuContainer from '../container';

describe('Component: Home', () => {
  const store = configureStore()({
    user: {
      username: 'User-1',
      sessionId: 'jchdi3bmc99aj',
    },
  });
  const container = shallow(<MenuContainer store={store} />);

  it('Match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
