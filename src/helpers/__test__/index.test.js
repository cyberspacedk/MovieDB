import { getFilmDuration, transformNumbers, deleteContent } from '../index';

describe('Test function getFilmDuration', () => {
  it('should return right format time', () => {
    expect(getFilmDuration(100)).toEqual('1 h 40 m');
  });
});

describe('Test function transformNumbers', () => {
  it('should return right format number', () => {
    expect(transformNumbers(10000000)).toEqual('10,000,000.00');
  });
});

describe('Test function. Two way launch function', () => {
  const item = {
    id: 2,
  };
  const operations = jest.fn();

  describe('Should launch func, which delete movie form list', () => {
    const history = {
      location: {
        pathname: 'http://localhost:3000/lists/577748',
      },
    };

    deleteContent(history, item, operations);

    it('should launch right function', () => {
      expect(operations).toHaveBeenCalledWith('577748', 2);
    });
  });
  describe('Should launch func, which delete one movie', () => {
    const history = {
      location: {
        pathname: 'http://localhost:3000/favorites',
      },
    };

    deleteContent(history, item, operations);

    it('should launch right function', () => {
      expect(operations).toHaveBeenCalledWith(2, false);
    });
  });
});
