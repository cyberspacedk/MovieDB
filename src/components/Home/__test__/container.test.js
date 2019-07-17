import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Home from '../component';
import { mstp } from '../container';

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

  it('Check imported mstp function', () => {
    const state = {
      user: {
        sessionId: '78zd4c3',
      },
    };
    expect(mstp(state)).toEqual({
      isAuthentificated: true,
    });
  });
});
