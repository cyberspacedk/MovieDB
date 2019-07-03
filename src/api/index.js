/* eslint-disable no-param-reassign */
import axios from 'axios';
import Cookies from 'js-cookie';
import qs from 'qs';

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

client.interceptors.request.use(config => {
  config.params = {
    api_key: '2452661f8c986fe61a12ec7532335900',
    session_id: Cookies.get('SESSION_ID'),
  };
  config.paramsSerializer = params => qs.stringify(params);
  return config;
});

// login :  movie__watcher
// pass:    VedbL<!@#$%7
// apiKey:   2452661f8c986fe61a12ec7532335900

export default client;
