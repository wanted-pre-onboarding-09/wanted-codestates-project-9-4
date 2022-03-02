import axios from 'axios';

const defaultClient = axios.create({
  baseURL: 'https://daground-proxy.herokuapp.com/https://test.daground.io/',
  headers: {
    'TEST-AUTH': `${process.env.REACT_APP_TEST_AUTH}`,
  },
});

export default defaultClient;
