/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import TopFilmsContainerConnected, { TopFilmsContainer } from '../container';
import { fetchDataRequest } from '../../../store/topFilms/actions';

configure({ adapter: new Adapter() });

describe('TopFilmsContainer ', () => {
  const store = configureStore()({
    topFilms: {
      loading: false,
      films: [{ id: 1, title: 'Some title' }],
      error: false,
    },
  });
  store.dispatch = jest.fn();

  const wrapper = shallow(<TopFilmsContainerConnected store={store} />);
  const container = wrapper.dive();

  it('Should match its snapshot', () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  // ПРИМЕР SPY
  it('Check call lifeCycleMethod componentDidMount', () => {
    mount(<TopFilmsContainerConnected store={store} />);
    // const spy = jest.spyOn(store, 'dispatch');
    expect(store.dispatch).toHaveBeenCalledWith(fetchDataRequest());
  });

  it('Map state and dispatch to props', () => {
    expect(container.props()).toEqual(
      expect.objectContaining({
        topFilms: expect.any(Array),
        loading: expect.any(Boolean),
        error: expect.any(Boolean),
        fetchDataRequest: expect.any(Function),
      }),
    );
  });
});
