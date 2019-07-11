import React from 'react';
import { shallow } from 'enzyme';
import { WatchListActionContainer } from '../container';

describe('WatchListActionContainer ', () => {
  const props = {
    operationsWatchListRequest: jest.fn(),
    movieId: 777,
  };

  const wrapper = shallow(<WatchListActionContainer {...props} />);

  it('Should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // проверить вызов ф-ции handleWatchList
});
