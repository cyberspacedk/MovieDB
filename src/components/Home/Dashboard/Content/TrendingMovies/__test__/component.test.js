import React from 'react';
import { shallow } from 'enzyme';
import TrendingMovies from '../component';

describe('Component: TrendingMovies', () => {
  const props = {
    loading: false,
    topFilms: [{ id: 1, title: 'Some title', overview: 'Some description' }],
    error: false,
    empty: false,
  };

  it('Match its snapshot. Array provided', () => {
    const wrapper = shallow(<TrendingMovies {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Match its snapshot. Loading ...', () => {
    const nextProps = {
      ...props,
      topFilms: [],
      loading: true,
    };
    const wrapper = shallow(<TrendingMovies {...nextProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Match its snapshot. Error', () => {
    const nextProps = {
      ...props,
      topFilms: [],
      error: true,
    };
    const wrapper = shallow(<TrendingMovies {...nextProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
