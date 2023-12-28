import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import PATH from '@/constants/path/Path';
import { useAuthStore } from '@/store/store';

const Instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APY_KEY,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const ReleaseInstance = axios.create({
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

// let lock = false;
// let subscribers: ((token: string) => void)[] = [];

// function subscribeTokenRefresh(cb: (token: string) => void) {
//   subscribers.push(cb);
// }

// function onRrefreshed(token: string) {
//   subscribers.forEach((cb) => cb(token));
// }

const getRefreshToken = async () => {
  try {
    const response = await axios.post<AuthDataProps>(PATH.API.AUTH.REISSUE);

    // lock = false;

    const { accessToken } = response.data.data;

    // onRrefreshed(accessToken);
    // subscribers = [];

    return accessToken;
  } catch (e) {
    // lock = false;
    // subscribers = [];
  }

  return '';
};

Instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response,
    }: { config: AxiosRequestConfig; response: AxiosResponse<ResponseProps> } = error;

    // const originalRequest = config;

    if (config.url === PATH.API.AUTH.REISSUE || response.status !== 401)
      return Promise.reject(error);
    if (response.status === 401) {
      if (response.data.message === 'Expired Token') {
        const accessToken = await getRefreshToken();
        const { setAccessToken } = useAuthStore((state) => ({
          setAccessToken: state.setAccessToken,
        }));

        if (accessToken) {
          setAccessToken(accessToken);
          if (config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
            return axios(config);
          }
        }
      } else if (response.data.message === 'Invaild') {
        return Promise.reject(error);
      }
    }
    // if (lock) {
    //   return new Promise((resolve) => {
    //     subscribeTokenRefresh((token: string) => {
    //       if (originalRequest.headers) {
    //         originalRequest.headers.Authorization = `Bearer ${token}`;
    //         resolve(axios(originalRequest));
    //       }
    //     });
    //   });
    // }
    // lock = true;

    // setAccessToken('');
    return Promise.reject(error);
  },
);

export default Instance;
