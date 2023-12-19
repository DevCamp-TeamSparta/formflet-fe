import axios, { InternalAxiosRequestConfig } from 'axios';

const Instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APY_KEY,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

Instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default Instance;

// instance.interceptos.response에 토큰의 유효기간이 만료에 대한 에러일 경우 refresh 토큰을 다시 기존의 request의 access-token (or Authorization) 헤더에 담아서 요청,
// 추가로 만료된 토큰을 발급하는 과정에서 여러 요청이 발생할 수 있기 때문에 재발급이전에 진행했던 요청을 리스트에 담아뒀다가 발급 이후 다시 발송하는 로직 추가.

/**
 * import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import Cookies from 'universal-cookie';

const Instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APY_KEY,
  headers: { 'Content-Type': 'application/json', 'Access-Token': token },
  withCredentials: true,
});

Instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const cookies = new Cookies();
    const token = cookies.get('access-token');

    if (config.headers && token) {
      config.headers.set({
        'Access-Token': `Bearer ${token}`,
        'Refresh-Token': `Bearer ${token}`,
      });
    }

    console.log('request', config);
    return config;
  },
  (error) => {
    console.error('request error', error);
    return Promise.reject(error);
  },
);

Instance.interceptors.response.use(
  (response) => {
    console.log('response', response);
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const cookie = new Cookies();
    const refreshToken = await cookie.get('refresh-token');

    if(status === 401) {
      if(error.response.data.message === 'expired') {
        const originalRequest = config;
        const 
      }
    }
  },
);

export default Instance;

 */
