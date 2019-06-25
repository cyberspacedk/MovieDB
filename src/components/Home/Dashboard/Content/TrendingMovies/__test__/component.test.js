import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TopFilms from '../component';

describe('Component: TopFilms', () => {
  const props = {
    loading: false,
    topFilms: [
      { id: 1, title: 'Some title', poster_path: 'path to picture' },
      { id: 2, title: 'Another title', poster_path: 'path to another picture' },
    ],
  };

  it('Match its snapshot. Display Data from DataBse', () => {
    const TopFilmsComponent = shallow(<TopFilms {...props} />);
    expect(shallowToJson(TopFilmsComponent)).toMatchSnapshot();
  });

  it('Match its snapshot. Display ...Loading ', () => {
    const nextProps = {
      ...props,
      loading: true,
    };
    const TopFilmsComponent = shallow(<TopFilms {...nextProps} />);
    expect(shallowToJson(TopFilmsComponent)).toMatchSnapshot();
  });
});
