import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'antd';

import CardItemContainer from '../container';

const spy = jest.spyOn(Modal, 'confirm');

describe('CardItemContainer ', () => {
  const props = {
    item: { id: 1 },
    operations: jest.fn(),
    history: {
      push: jest.fn(),
      location: {
        pathname: '',
      },
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

  it('Check is calling method. Should call action', () => {
    instance.onOk();
    expect(instance.props.operations).toHaveBeenCalledWith(1, false);
  });

  it('Check is calling method. Should call action add', () => {
    const nextProps = {
      ...props,
      history: {
        ...props.history,
        location: {
          pathname: 'http://localhost:3000/lists/45277',
        },
      },
    };

    const container = shallow(<CardItemContainer {...nextProps} />);
    const instance = container.instance();
    instance.onOk();
    expect(instance.props.operations).toHaveBeenCalledWith('45277', 1);
  });

  it('Check is calling method. Should call modal window', () => {
    const e = { stopPropagation: jest.fn() };

    instance.handleRemoveWatchModal(e);

    expect(e.stopPropagation).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({
      title: 'Do you want to delete movie ?',
      onOk: instance.onOk,
    });
  });
});
