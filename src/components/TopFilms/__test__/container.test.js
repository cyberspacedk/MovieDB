/* eslint-disable no-undef */
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

/* jest.mock('../../../store/topFilms/actions', {
  fetchDataRequest: jest.fn(),
});
 */
describe('TopFilmsContainer ', () => {
  const mockStore = configureStore();
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

  it('Should match its snapshot', () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  it('Check call lifeCycleMethod componentDidMount', () => {
    jest.spyOn(TopFilmsContainer.prototype, 'componentDidMount');
    shallow(<TopFilmsContainer {...props} />);
    expect(
      TopFilmsContainer.prototype.componentDidMount.mock.calls.length,
    ).toBe(1);
  });

  it('Check is action has been called in lifecyclemethod', () => {
    expect(props.fetchDataRequest).toHaveBeenCalledTimes(1);
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
