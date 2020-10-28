import axios from "axios";

const baseURL = "接口请添加coderwhy老师微信";

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
