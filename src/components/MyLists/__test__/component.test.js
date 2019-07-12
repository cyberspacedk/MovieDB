import React from 'react';
import { shallow } from 'enzyme';
import MyList from '../component';

describe('Component: MyList', () => {
  const props = {
    showModal: jest.fn(),
    hideModal: jest.fn(),
    visibleMod: false,
    deleteListRequest: jest.fn(),
    myLists: [{ id: 1 }],
    error: false,
    loading: false,
    empty: false,
    totalResults: 5,
    currentPage: 33,
    goToNextPage: jest.fn(),
    history: {
      push: jest.fn(),
    },
  };

  const container = shallow(<MyList {...props} />);

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });
});
