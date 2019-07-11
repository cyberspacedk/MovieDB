import React from 'react';
import { shallow } from 'enzyme';
import WatchListAction from '../component';

describe('Component: WatchListAction', () => {
  const props = {
    handleWatchList: jest.fn(),
    watchListStatus: false,
  };

  const wrapper = shallow(<WatchListAction {...props} />);

  it('Match its snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
