import React from 'react';
import { shallow } from 'enzyme';
import ListDetails from '../component';

describe('Component: ListDetails', () => {
  const props = {
    loading: false,
    empty: false,
    error: false,
    detailsList: [{ id: 1 }],
    history: {
      push: jest.fn(),
    },
    listName: 'Comedy',
    deleteMovieFromListRequest: jest.fn(),
  };

  const container = shallow(<ListDetails {...props} />);

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });
});
