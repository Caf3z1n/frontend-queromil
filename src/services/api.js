import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.queromil.cf',
});

export default api;
