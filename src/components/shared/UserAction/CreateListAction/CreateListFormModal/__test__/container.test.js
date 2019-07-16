import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import CreateListFormModalConnected, {
  CreateListFormModalContainer,
} from '../container';

describe('CreateListActionConnected ', () => {
  const store = configureStore()({
    myLists: {
      ids: [1, 2, 3],
    },
    database: {
      lists: { 1: {} },
    },
  });
  store.dispatch = jest.fn();

  const props = {
    hideModal: jest.fn(),
    handleReset: jest.fn(),
    handleSubmit: jest.fn(),
    isSubmitting: jest.fn(),
    status: 'SUCCESS',
  };

  const wrapperConnected = shallow(
    <CreateListFormModalConnected store={store} {...props} />,
  );
  const containerConnected = wrapperConnected
    .dive()
    .dive()
    .dive();

  const container = shallow(<CreateListFormModalContainer {...props} />);
  const instance = container.instance();

  it('Should match its snapshot. Received props from HOCs', () => {
    expect(containerConnected).toMatchSnapshot();
  });

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('check lifecycle method. should call handleReset and hideModal functions  ', () => {
    instance.componentDidUpdate();
    expect(container.props().hideModal).toHaveBeenCalled();
    expect(container.props().handleReset).toHaveBeenCalled();
  });

  it('should call handleReset and hideModal functions', () => {
    instance.handleFormCancel();
    expect(container.props().hideModal).toHaveBeenCalled();
    expect(container.props().handleReset).toHaveBeenCalled();
  });

  it('should call handleSubmit', () => {
    instance.handleFormSubmit();
    expect(container.props().handleSubmit).toHaveBeenCalled();
  });
});
