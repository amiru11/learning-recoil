import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiRequest = ({ ...config }: AxiosRequestConfig) =>
  axiosInstance({
    ...config,
  });

export default apiRequest;
