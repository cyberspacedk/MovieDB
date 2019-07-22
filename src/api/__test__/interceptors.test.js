import qs from 'qs';
import client from '../index';

jest.mock('js-cookie', () => ({
  get: jest.fn(() => '777'),
}));

jest.mock('qs', () => ({
  stringify: jest.fn(() => 'serialized'),
}));

describe('Check interceptor', () => {
  it('should intercept request and add params field', () => {
    const config = client.interceptors.request.handlers[0].fulfilled({});

    expect(config).toEqual({
      params: {
        api_key: '2452661f8c986fe61a12ec7532335900',
        session_id: '777',
      },
      paramsSerializer: expect.any(Function),
    });
  });

  it('should intercept request and add params field', () => {
    const config = client.interceptors.request.handlers[0].fulfilled({});

    const result = config.paramsSerializer('1111');

    expect(result).toEqual('serialized');
    expect(qs.stringify).toHaveBeenCalledWith('1111');
  });
});
