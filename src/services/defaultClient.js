import axios from 'axios';

const defaultClient = axios.create({
  baseURL: '/info',
  timeout: 1000,
  headers: {
    'TEST-AUTH': 'wantedpreonboarding',
  },
});

export default defaultClient;
