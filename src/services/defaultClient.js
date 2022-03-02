import axios from 'axios';

const defaultClient = axios.create({
  baseURL: 'https://daground-proxy.herokuapp.com/https://test.daground.io/',
  timeout: 5000,
  headers: {
    'TEST-AUTH': `${process.env.REACT_APP_TEST_AUTH}`,
  },
});

export default defaultClient;
