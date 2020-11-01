import axios from 'axios';

const api = axios.create({
  baseURL: 'http://159.89.51.29/',
});

export default api;
