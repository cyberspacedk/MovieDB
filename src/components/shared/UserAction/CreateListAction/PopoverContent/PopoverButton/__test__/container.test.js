import React from 'react';
import { shallow } from 'enzyme';
import PopoverButtonContainer from '../container';

describe('CreateListActionConnected ', () => {
  const props = {
    movieId: 777,
    item: { id: 9 },
    addMovieToList: jest.fn(),
  };

  const container = shallow(<PopoverButtonContainer {...props} />);
  const instance = container.instance();

  it('Should match its snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Should call method handlerAddMovieToList', () => {
    instance.handlerAddMovieToList();
    expect(instance.props.addMovieToList).toHaveBeenCalledWith(9, 777);
  });
});
