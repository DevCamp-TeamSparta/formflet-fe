import axios from 'axios';

const userApi = axios.create({
  baseURL: '',
  headers: { 'Content-Type': 'application/json' },
});

userApi.interceptors.request.use(
  function (config) {
    console.log('request', config);
    return config;
  },
  function (error) {
    console.log('request error', error);
    return Promise.reject(error);
  },
);

export default userApi;
