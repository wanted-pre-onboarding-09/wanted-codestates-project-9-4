import axios from './defaultClient';

const dataAPI = {
  fetchBySectorId(id) {
    return axios.get(`/info/contents/?sector=${id}`);
  },
  fetchByContentId(id) {
    return axios.get(`/info/contents/?content=${id}`);
  },
};

export default dataAPI;
