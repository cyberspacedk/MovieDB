import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Favorites from '../component';

describe('Component: Favorites', () => {
  const props = {
    favorites: [{ id: 1, title: 'Some title', overview: 'Some description' }],
    loading: false,
    error: false,
    empty: false,
    currentPage: 1,
    totalResults: 25,
    history: {
      push: () => {},
    },
    operationsFavoritesRequest: () => {},
    goToNextPage: jest.fn(),
  };

  it('Match its snapshot. Array provided', () => {
    const wrapper = shallow(
      <Favorites {...props} title="Favorites" removeBox />,
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
      <Favorites {...nextProps} title="Favorites" removeBox />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. Error', () => {
    const nextProps = {
      ...props,
      favorites: [],
      error: true,
    };
    const wrapper = shallow(
      <Favorites {...nextProps} title="Favorites" removeBox />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. Empty', () => {
    const nextProps = {
      ...props,
      favorites: [],
      empty: true,
    };
    const wrapper = shallow(
      <Favorites {...nextProps} title="Favorites" removeBox />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
