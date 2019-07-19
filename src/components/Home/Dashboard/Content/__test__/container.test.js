import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Content from '../container';

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
});
