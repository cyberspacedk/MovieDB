import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CardItem from '../component';

describe('Component: Card', () => {
  const props = {
    item: { title: 'Tittle', overview: 'Overview', poster_path: 'path' },
    handleShowMoreDetails: () => {},
    handleRemoveWatchModal: () => {},
    removeBox: true,
  };

  it('Match its snapshot. Item provided', () => {
    const wrapper = shallow(<CardItem {...props} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. Card without image', () => {
    const nextProps = {
      ...props,
      item: { title: 'Tittle', overview: 'Overview' },
    };
    const wrapper = shallow(<CardItem {...nextProps} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Match its snapshot. Card without remove box', () => {
    const nextProps = {
      ...props,
      removeBox: false,
    };
    const wrapper = shallow(<CardItem {...nextProps} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
