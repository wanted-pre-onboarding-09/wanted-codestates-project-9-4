import axios from './defaultClient';

const dataAPI = {
  fetchBySectorId(id) {
    return axios.get(`/contents/?sector=${id}`);
  },
  fetchByContentId(id) {
    return axios.get(`/contents/?content=${id}`);
  },
};

export default dataAPI;
