/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import TopFilmsContainerConnected, {
  mstp,
  TopFilmsContainer,
} from '../container';
/*
 1- snapshot
 2- render one component

*/
describe('TopFilmsContainer ', () => {
  const mockStore = configureStore();
  const mockClick = jest.fn();
  let store;
  let wrapper;

  const initialState = {
    topFilms: {
      loading: false,
      films: [{}],
      error: false,
    },
  };
  const props = {
    fetchDataRequest: jest.fn(),
    loading: false,
    error: false,
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<TopFilmsContainerConnected store={store} />);
  });

  it('Snapshot. Should Match', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render container component', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Shoud show previous loading value', () => {
    expect(mstp(initialState).loading).toEqual(false);
  });

  it('calls ComponentDidMount', () => {
    const wrapperDump = shallow(<TopFilmsContainer {...props} />);
    wrapperDump.instance().componentDidMount();
    expect(wrapperDump.instance().fetchDataRequest).toHaveBeenCalledTimes(1);
  });
});
