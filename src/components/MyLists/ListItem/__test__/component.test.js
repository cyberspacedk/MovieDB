import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../component';

describe('Component: ListItem', () => {
  const props = {
    handleListDetails: jest.fn(),
    handleDeleteModal: jest.fn(),
    item: {
      name: 'Comedy',
      description: 'List Description',
    },
  };

  const container = shallow(<ListItem {...props} />);

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });
});
