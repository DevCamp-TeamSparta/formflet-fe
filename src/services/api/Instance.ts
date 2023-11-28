import axios from 'axios';

const Instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APY_KEY,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

Instance.interceptors.request.use(
  (config) => {
    console.log('request', config);
    return config;
  },
  (error) => {
    console.error('request error', error);
    return Promise.reject(error);
  },
);

export default Instance;
