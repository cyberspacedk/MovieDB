import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('Component: App', () => {
  const AppComponent = shallow(<App />);

  it('should match its snapshot', () => {
    expect(AppComponent).toMatchSnapshot();
  });
});
