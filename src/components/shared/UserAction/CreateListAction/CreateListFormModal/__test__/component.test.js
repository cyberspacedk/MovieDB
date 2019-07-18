import React from 'react';
import { shallow } from 'enzyme';
import CreateListFormModal from '../component';

describe('Component: CreateListFormModal', () => {
  const props = {
    visibleMod: false,
    handleFormCancel: jest.fn(),
    handleFormSubmit: jest.fn(),
    errors: {
      status: '',
    },
  };

  const wrapper = shallow(<CreateListFormModal {...props} />);

  it('Match its snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Match its snapshot. Creation Error', () => {
    const nextProps = {
      ...props,
      errors: {
        status: 'FAILURE',
      },
    };
    const wrapper = shallow(<CreateListFormModal {...nextProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
