import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CreateListFormModalConnected, {
  CreateListFormModalContainer,
  mapPropsToValues,
  handleSubmit,
  validationSchema,
} from '../container';
// import { createListRequest } from '../../../../../../store/myLists/actions';

describe('CreateListActionConnected ', () => {
  describe('Test container with connect', () => {
    const store = configureStore()({});
    store.dispatch = jest.fn();

    const wrapper = shallow(<CreateListFormModalConnected store={store} />);

    const container = wrapper
      .dive()
      .dive()
      .dive()
      .dive();

    it('Should match its snapshot', () => {
      expect(container).toMatchSnapshot();
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

  describe('Test container without connect', () => {
    const props = {
      hideModal: jest.fn(),
      handleReset: jest.fn(),
      handleSubmit: jest.fn(),
      isSubmitting: jest.fn(),
      status: 'SUCCESS',
    };

    const container = shallow(<CreateListFormModalContainer {...props} />);
    const instance = container.instance();

    it('check lifecycle method. should not call handleReset and hideModal functions  ', () => {
      const nextProps = {
        ...props,
        status: 'WAITING',
      };
      const container = shallow(
        <CreateListFormModalContainer {...nextProps} />,
      );
      const instance = container.instance();

      instance.componentDidUpdate();
      expect(container.props().hideModal).not.toHaveBeenCalled();
      expect(container.props().handleReset).not.toHaveBeenCalled();
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
  });
});
