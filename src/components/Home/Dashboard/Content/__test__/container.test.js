import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Content from '../component';
import { mstp } from '../container';

describe('Component: Content', () => {
  const store = configureStore()({
    search: {
      total_results: 10,
    },
  });
  const container = shallow(<Content store={store} />);

  it('Match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check imported mstp function', () => {
    const state = {
      search: {
        total_results: 101,
      },
    };
    expect(mstp(state)).toEqual({
      searchResponse: 101,
    });
  });
});
