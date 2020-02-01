import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
});

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios;
};

export { axiosInstance };
