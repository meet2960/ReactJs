import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    // Replace 'YOUR_BEARER_TOKEN' with your actual Bearer token
    const token = import.meta.env.REACT_APP_AUTH_TOKEN;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
