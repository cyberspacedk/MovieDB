/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import TopFilmsContainerConnected, {
  TopFilmsContainer,
  mstp,
} from '../container';
import { fetchDataRequest } from '../../../store/topFilms/actions';

/* jest.mock('../../../store/topFilms/actions',  ({
  fetchDataRequest: jest.fn(),
})); */

describe('TopFilmsContainer ', () => {
  const mockStore = configureStore();
  const mockClick = jest.fn();

  // let wrapper;
  // let wrapperDumb;

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

  const store = mockStore(initialState);
  const wrapper = shallow(
    <TopFilmsContainerConnected store={store} {...props} />,
  );
  const container = wrapper.dive();

  // const wrapperDumb = shallow(<TopFilmsContainer {...props} />);

  // beforeEach(() => {
  //  store = mockStore(initialState);
  //  wrapper = shallow(<TopFilmsContainerConnected store={store} {...props} />);
  //  wrapperDumb = shallow(<TopFilmsContainer {...props} />);
  // });

  it('Snapshot: connected container.', () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  /* it('Should render container component', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Snapshot: dumb component', () => {
    expect(shallowToJson(wrapperDumb)).toMatchSnapshot();
  });

  it('Check: Is dumb component render a child', () => {
    expect(wrapperDumb.length).toBe(1);
  });

  it('Check: MapStateToProps', () => {
    expect(mstp(initialState).loading).toEqual(false);
  }); */

  /* it('Simulate: dispatch action', () => {
    const spy = jest.spyOn(TopFilmsContainer.prototype, 'fetchDataRequest');
    const inst = mount(<TopFilmsContainer {...props} />);
    inst.instance().fetchDataRequest();
    expect(spy).toHaveBeenCalledTimes(1);
  }); */

  /*  it('Lifecycle: componentDidMount', () => {
    // const component = shallow(<TopFilmsContainer {...props} />);
    // component.instance().componentDidMount();
    container.instance().componentDidMount();
    expect(fetchDataRequest).toHaveBeenCalled();
  }); */

  /* it('Check launch action in componentDidMount', () => {
    const mockFetch = jest.fn();

    const nextProps = {
      ...props,
      fetchDataRequest: mockFetch,
    };
    const wrapper = shallow(<TopFilmsContainer {...nextProps} />);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  }); */
});
