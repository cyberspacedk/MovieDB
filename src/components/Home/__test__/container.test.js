import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Home from '../container';

describe('Component: Home', () => {
  const store = configureStore()({
    user: {
      sessionId: 'jchdi3bmc99aj',
    },
  });
  const container = shallow(<Home store={store} />);

  it('Match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
