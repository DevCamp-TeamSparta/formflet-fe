import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get('access-token');

const Instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APY_KEY,
  headers: { 'Content-Type': 'application/json', 'Access-Token': token },
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
