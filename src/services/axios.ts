import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_URL,
    headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
    function (config) {
        console.log('request', config);
        return config;
    },
    function (error) {
        console.log('request error', error);
        return Promise.reject(error);
    },
);

export default instance;
