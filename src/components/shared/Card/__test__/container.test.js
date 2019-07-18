import React from 'react';
import { shallow } from 'enzyme';
import CardItemContainer from '../container';

describe('CardItemContainer ', () => {
  const props = {
    item: {},
    operations: jest.fn(),
    history: {
      push: jest.fn(),
    },
  };

  const container = shallow(<CardItemContainer {...props} />);
  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check is calling container method.', () => {
    instance.handleShowMoreDetails();
    expect(container.props().history.push).toHaveBeenCalled();
  });

  xit('Check is calling container method.', () => {
    const e = { stopPropagation: jest.fn() };
    const Modal = {
      confirm: jest.fn(),
    };
    instance.handleRemoveWatchModal(e);
    expect(Modal.confirm).toHaveBeenCalled();
  });
});
