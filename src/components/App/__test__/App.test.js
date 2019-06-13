import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from '../App';

describe('Component: App', () => {
  const AppComponent = shallow(<App />);
  it('should match its snapshot', () => {
    expect(shallowToJson(AppComponent)).toMatchSnapshot();
  });
});
