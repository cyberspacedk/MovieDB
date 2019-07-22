import React from 'react';
import { shallow } from 'enzyme';
import Favorites from '../component';

describe('Component: Favorites', () => {
  describe('Status fields. Error , Loading', () => {
    const props = {
      error: true,
      loading: false,
      aboutFilm: {},
    };

    it('Match its snapshot. Error', () => {
      const wrapper = shallow(<Favorites {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('Match its snapshot. Loading', () => {
      const nextProps = {
        ...props,
        error: false,
        loading: true,
      };
      const wrapper = shallow(<Favorites {...nextProps} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Match its snapshot. About film object provided', () => {
    const props = {
      error: false,
      loading: false,
      aboutFilm: {
        id: 1001,
        original_title: 'Robocop',
        overview: 'Dead cop kill his murders',
        original_language: 'en',
        runtime: 150,
        budget: 7000000,
        revenue: 90005,
        backdrops: [{ file_path: 'path' }],
        genres: [{ id: 1, name: 'Action' }],
        cast: [
          { cast_id: 1, profile_path: 'path', name: 'Bill', character: 'Cop' },
        ],
        crew: [
          {
            credit_id: 177,
            profile_path: 'path',
            name: 'John',
            department: '3D',
          },
        ],
      },
    };
    it('Should draw component that shows film data', () => {
      const wrapper = shallow(<Favorites {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('Match its snapshot. About film object provided.Another lang', () => {
      const nextProps = {
        ...props,
        aboutFilm: {
          ...props.aboutFilm,
          original_language: 'ua',
        },
      };
      const wrapper = shallow(<Favorites {...nextProps} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
