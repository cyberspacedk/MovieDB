import { getFilmDuration, transformNumbers } from '../index';

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
