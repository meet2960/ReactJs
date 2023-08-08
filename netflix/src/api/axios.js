import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = import.meta.env.VITE_REACT_APP_AUTH_TOKEN;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

export const baseImgUrl = "https://image.tmdb.org/t/p/original/";
