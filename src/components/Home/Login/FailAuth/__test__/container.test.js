import React from 'react';
import { shallow } from 'enzyme';
import { FailAuthContainer } from '../container';

describe('Component: Home', () => {
  const props = {
    tryAgain: jest.fn(),
  };
  const container = shallow(<FailAuthContainer {...props} />);

  it('Match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
