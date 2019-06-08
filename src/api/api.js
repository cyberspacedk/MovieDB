export const BASE_URL = 'https://api.themoviedb.org/3/';

export const API_KEY = '2452661f8c986fe61a12ec7532335900';

export const REQUEST_TOKEN_PATH = `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`;

export const GET_SESSION_ID_PATH = `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`;

export const GET_SESSION_ID_LOGIN_PATH = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`;
