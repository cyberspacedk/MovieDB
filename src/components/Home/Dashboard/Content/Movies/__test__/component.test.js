import React from 'react';
import { shallow } from 'enzyme';
import Movies from '../component';

describe('Component: Movies', () => {
  const props = {
    loading: false,
    error: false,
    empty: false,
    movies: [{ id: 1 }],
    totalResults: 10,
    history: {
      push: jest.fn(),
    },
    goToNextPage: jest.fn(),
    currentPage: 1,
  };
  const container = shallow(<Movies {...props} />);

  it('Snapshot: should match. Field without errors', () => {
    expect(container).toMatchSnapshot();
  });
});
