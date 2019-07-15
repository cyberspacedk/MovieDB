import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import PageLayout from '../component';

describe('Component: PageLayout', () => {
  const props = {
    title: 'some title',
    removeBox: false,
    loading: false,
    error: false,
    empty: false,
    currentPage: 1,
    totalResults: 0,
    history: {
      push: () => {},
    },
    array: [],
    operations: () => {},
    goToNextPage: () => {},
  };

  it('Match its snapshot. Array provided', () => {
    const nextProps = {
      ...props,
      array: [{ id: 1, title: 'Some title', overview: 'Some description' }],
    };
    const wrapper = shallow(<PageLayout {...nextProps} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. Loading ...', () => {
    const nextProps = {
      ...props,
      loading: true,
    };
    const wrapper = shallow(<PageLayout {...nextProps} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. Error', () => {
    const nextProps = {
      ...props,
      error: true,
    };
    const wrapper = shallow(<PageLayout {...nextProps} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. No title', () => {
    const nextProps = {
      ...props,
      title: '',
    };
    const wrapper = shallow(<PageLayout {...nextProps} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. No remove box', () => {
    const nextProps = {
      ...props,
      removeBox: true,
    };
    const wrapper = shallow(<PageLayout {...nextProps} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. With pagination', () => {
    const nextProps = {
      ...props,
      totalResults: 55,
    };
    const wrapper = shallow(<PageLayout {...nextProps} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
