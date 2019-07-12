import React from 'react';
import { shallow } from 'enzyme';
import ListItemContainer from '../container';

describe('Container: ListItemContainer', () => {
  const props = {
    item: {
      id: 1,
    },
    deleteListRequest: jest.fn(),
    history: {
      push: jest.fn(),
    },
  };

  const wrapper = shallow(<ListItemContainer {...props} />);
  const container = wrapper.dive();

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });
});
