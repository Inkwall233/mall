import axios from "axios";

const baseURL = "http://152.136.185.210:8000/api/w6/";

export function request(config) {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
  });
  // 拦截器
  // instance.interceptors.request.use(
  //   (config) => {
  //     return config;
  //   },
  //   (err) => {
  //     return Promise.reject(err);
  //   }
  // );
  return instance(config);
}
