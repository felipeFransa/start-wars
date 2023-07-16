import axios from 'axios';

const http = axios.create({
    baseURL: 'https://swapi.dev/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });