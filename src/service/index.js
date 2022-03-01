import axios from 'axios';

const instance = axios.create({
  baseURL: '/contents',
  timeout: 1000,
  headers: { 'TEST-AUTH': 'wantedpreonboarding' },
});

export default instance;
