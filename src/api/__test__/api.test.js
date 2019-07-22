/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import client from '../index';

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    interceptors: {
      request: {
        use: jest.fn(),
      },
    },
    get: jest.fn(),
  })),
}));

describe('API config', () => {
  it('should send request - apiConfig', () => {
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://api.themoviedb.org/3/',
      timeout: 1000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  });
});
