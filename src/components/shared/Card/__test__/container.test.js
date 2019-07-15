import React from 'react';
import { shallow } from 'enzyme';
import CardItemContainer from '../container';

describe('FavoritesContainer ', () => {
  const props = {
    item: {},
    operations: jest.fn(),
    history: {
      push: jest.fn(),
    },
  };

  const container = shallow(<CardItemContainer {...props} />);
  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Check is calling container method.', () => {
    jest.spyOn(instance, 'handleShowMoreDetails');
    instance.handleShowMoreDetails = jest.fn();
    instance.handleShowMoreDetails();
    expect(instance.handleShowMoreDetails).toHaveBeenCalled();
  });

  it('Check is calling container method.', () => {
    jest.spyOn(instance, 'handleRemoveWatchModal');
    instance.handleRemoveWatchModal = jest.fn();
    instance.handleRemoveWatchModal();
    expect(instance.handleRemoveWatchModal).toHaveBeenCalled();
  });
});
