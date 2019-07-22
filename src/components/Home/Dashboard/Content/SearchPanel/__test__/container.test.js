import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CreateListFormModalConnected, {
  mapPropsToValues,
  handleSubmit,
  validationSchema,
} from '../container';

describe('SearchPanel. Ckeck imported function', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();

  const wrapper = shallow(<CreateListFormModalConnected store={store} />);

  const container = wrapper
    .dive()
    .dive()
    .dive();

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('check mapPropsToValues function', () => {
    expect(mapPropsToValues()).toEqual({
      search: '',
    });
  });

  it('check validationSchema', () => {
    expect(validationSchema).toMatchSnapshot();
  });

  it('check call handlesubmit and function inside', () => {
    const values = {
      search: 'query',
    };
    const searchRequest = jest.fn();
    const data = {
      props: {
        searchRequest,
      },
    };
    handleSubmit(values, data);

    expect(searchRequest).toHaveBeenCalledWith(values.search);
  });
});
