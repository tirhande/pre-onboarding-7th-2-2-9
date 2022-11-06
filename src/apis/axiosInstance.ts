import axios from 'axios';

const delay = () => {
  const time = Math.floor(Math.random() * (700 - 10 + 1) + 10);
  return new Promise(resolve => setTimeout(resolve, time));
};

const instance = axios.create({
  timeout: 5000,
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);
instance.interceptors.response.use(
  async response => {
    await delay();
    return response;
  },
  error => {
    return Promise.reject(error.response);
  }
);

export default instance;
