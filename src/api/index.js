const BASE_URL = 'https://api.themoviedb.org/3/';

const API_KEY = '2452661f8c986fe61a12ec7532335900';

const SESSION_ID = JSON.parse(localStorage.getItem('SESSION_ID'));

const REQUEST_TOKEN_PATH = `${BASE_URL}authentication/token/new?api_key=${API_KEY}`;

const GET_SESSION_ID_PATH = `${BASE_URL}authentication/session/new?api_key=${API_KEY}`;

const GET_SESSION_ID_LOGIN_PATH = `${BASE_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;

const DELETE_SESSION_ID_PATH = `${BASE_URL}authentication/session?api_key=${API_KEY}`;

const CREATE_LIST_PATH = `${BASE_URL}list?api_key=${API_KEY}&session_id=${SESSION_ID}`;

const GET_FILMS_PATH = `${BASE_URL}trending/movie/week?api_key=${API_KEY}`;

const IMAGE_PATH = `https://image.tmdb.org/t/p/w200`;

// login :  movie__watcher
// pass:    VedbL<!@#$%7

export {
  BASE_URL,
  API_KEY,
  SESSION_ID,
  REQUEST_TOKEN_PATH,
  GET_SESSION_ID_PATH,
  GET_SESSION_ID_LOGIN_PATH,
  DELETE_SESSION_ID_PATH,
  CREATE_LIST_PATH,
  GET_FILMS_PATH,
  IMAGE_PATH,
};
