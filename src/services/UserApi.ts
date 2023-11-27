import axios from 'axios';

const userApi = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
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
