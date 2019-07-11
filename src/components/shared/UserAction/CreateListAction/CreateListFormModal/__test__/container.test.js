import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import CreateListFormModalConnected from '../container';

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
    status: 'waiting',
  };

  const container = shallow(
    <CreateListFormModalConnected store={store} {...props} />,
  );

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  // необходимо протестировать остальные функции
});
