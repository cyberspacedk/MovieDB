import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'antd';
import ListItemContainer from '../container';

const spy = jest.spyOn(Modal, 'confirm');

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

  const container = shallow(<ListItemContainer {...props} />);
  const instance = container.instance();

  it('Snapshot: should match', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check is calling method. Should call history.push', () => {
    instance.handleListDetails();
    expect(props.history.push).toHaveBeenCalled();
  });

  it('Check is calling method. Should call action', () => {
    instance.onOk();
    expect(instance.props.deleteListRequest).toHaveBeenCalledWith(1);
  });

  it('Check is calling method. Should call modal window', () => {
    const e = {
      stopPropagation: jest.fn(),
    };

    instance.handleDeleteModal(e);
    expect(e.stopPropagation).toHaveBeenCalled();

    expect(spy).toHaveBeenCalledWith({
      title: 'Do you want to delete this list?',
      onOk: expect.any(Function),
    });
  });
});
