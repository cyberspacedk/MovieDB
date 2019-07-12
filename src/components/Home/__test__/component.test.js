import React from 'react';
import { shallow } from 'enzyme';
import Home from '../component';

describe('Component: Home', () => {
  const props = {
    isAuthentificated: true,
  };

  it('Match its snapshot. Display Dashboard', () => {
    const container = shallow(<Home {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('Match its snapshot. Display LoginPage ', () => {
    const nextProps = {
      isAuthentificated: false,
    };
    const TopFilmsComponent = shallow(<Home {...nextProps} />);
    expect(TopFilmsComponent).toMatchSnapshot();
  });
});
