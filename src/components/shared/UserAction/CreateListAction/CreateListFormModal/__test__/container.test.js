import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CreateListFormModalConnected, {
  mapPropsToValues,
  handleSubmit,
  validationSchema,
} from '../container';

describe('CreateListActionConnected ', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();

  const props = {
    hideModal: jest.fn(),
    handleReset: jest.fn(),
    handleSubmit: jest.fn(),
    isSubmitting: jest.fn(),
    status: 'SUCCESS',
  };

  const wrapper = shallow(
    <CreateListFormModalConnected store={store} {...props} />,
  );

  const container = wrapper
    .dive()
    .dive()
    .dive()
    .dive();

  const instance = container.instance();

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

  it('check lifecycle method. should not call handleReset and hideModal functions  ', () => {
    const nextProps = {
      ...props,
      status: 'WAITING',
    };
    const wrapper = shallow(
      <CreateListFormModalConnected store={store} {...nextProps} />,
    );

    const container = wrapper
      .dive()
      .dive()
      .dive()
      .dive();

    const instance = container.instance();

    instance.componentDidUpdate();
    expect(container.props().hideModal).not.toHaveBeenCalled();
    expect(container.props().handleReset).not.toHaveBeenCalled();
  });

  it('check mapPropsToValues function', () => {
    expect(mapPropsToValues()).toEqual({
      name: '',
      description: '',
    });
  });

  it('check validationSchema', () => {
    expect(validationSchema).toMatchSnapshot();
  });

  it('check call handlesubmit and function inside', () => {
    const values = {
      name: 'list name',
      description: 'list description',
    };
    const createListRequest = jest.fn();
    const formikBag = { props: { createListRequest } };
    handleSubmit(values, formikBag);

    expect(createListRequest).toHaveBeenCalledWith(
      values.name,
      values.description,
      formikBag,
    );
  });
});
