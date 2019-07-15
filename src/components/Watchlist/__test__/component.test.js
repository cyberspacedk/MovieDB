import React from 'react';
import { shallow } from 'enzyme';
import WatchList from '../component';

describe('Component: WatchList', () => {
  const props = {
    watchList: [{ id: 1, title: 'Some title', overview: 'Some description' }],
    loading: false,
    error: false,
    empty: false,
    currentPage: 1,
    totalResults: 25,
    history: {
      push: () => {},
    },
    operationsWatchListRequest: () => {},
    goToNextPage: jest.fn(),
  };

  it('Match its snapshot. Array provided', () => {
    const wrapper = shallow(
      <WatchList {...props} title="WatchList" removeBox />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
