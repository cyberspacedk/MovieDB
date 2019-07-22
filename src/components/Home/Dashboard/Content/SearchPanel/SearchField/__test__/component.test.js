import React from 'react';
import { shallow } from 'enzyme';
import SearchField from '../component';

describe('Component: SearchField', () => {
  const props = {
    field: {
      name: 'search',
    },
    form: {
      errors: {},
      touched: {},
    },
  };
  const container = shallow(<SearchField {...props} />);

  it('Snapshot: should match. Field without errors', () => {
    expect(container).toMatchSnapshot();
  });

  it('Snapshot: should match. Field with errors', () => {
    const nextProps = {
      ...props,
      form: {
        errors: {
          search: 'Some error',
        },
        touched: {
          search: 'required field',
        },
      },
    };
    const container = shallow(<SearchField {...nextProps} />);

    expect(container).toMatchSnapshot();
  });
});
