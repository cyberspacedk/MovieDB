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

  it('Snapshot: should match', () => {
    const container = shallow(<MyList {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('Snapshot: should match. Error', () => {
    const nextProps = {
      ...props,
      error: true,
    };
    const container = shallow(<MyList {...nextProps} />);

    expect(container).toMatchSnapshot();
  });

  it('Snapshot: should match. Loading', () => {
    const nextProps = {
      ...props,
      loading: true,
    };
    const container = shallow(<MyList {...nextProps} />);

    expect(container).toMatchSnapshot();
  });

  it('Snapshot: should match. Empty', () => {
    const nextProps = {
      ...props,
      empty: true,
    };
    const container = shallow(<MyList {...nextProps} />);

    expect(container).toMatchSnapshot();
  });
});
