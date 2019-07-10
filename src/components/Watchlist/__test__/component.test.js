import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
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
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. Loading ...', () => {
    const nextProps = {
      ...props,
      favorites: [],
      loading: true,
    };
    const wrapper = shallow(
      <WatchList {...nextProps} title="Favorites" removeBox />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. Error', () => {
    const nextProps = {
      ...props,
      watchList: [],
      error: true,
    };
    const wrapper = shallow(
      <WatchList {...nextProps} title="Favorites" removeBox />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. Empty', () => {
    const nextProps = {
      ...props,
      watchlist: [],
      empty: true,
    };
    const wrapper = shallow(
      <WatchList {...nextProps} title="Favorites" removeBox />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
