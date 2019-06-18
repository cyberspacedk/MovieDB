import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
// login :  movie__watcher
// pass:    VedbL<!@#$%7
// apiKey:  api_key=2452661f8c986fe61a12ec7532335900

export default client;
