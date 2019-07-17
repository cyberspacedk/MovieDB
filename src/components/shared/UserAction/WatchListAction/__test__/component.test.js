import React from 'react';
import { shallow } from 'enzyme';
import WatchListAction from '../component';

describe('Component: WatchListAction', () => {
  it('Match its snapshot. Icon doesnt filled', () => {
    const props = {
      handleWatchList: jest.fn(),
      watchListStatus: false,
    };

    const wrapper = shallow(<WatchListAction {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Match its snapshot. Icon filled', () => {
    const props = {
      handleWatchList: jest.fn(),
      watchListStatus: true,
    };

    const wrapper = shallow(<WatchListAction {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
