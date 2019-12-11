// 开发http插件，用于发送请求
// 要点：Vue.js 的插件应该有一个公开方法 install
import axios from 'axios'
const Http = {}

Http.install = function (Vue) {
  // 设置接口基准地址
    axios.defaults.baseURL = "http://localhost:3000/";

  //   // 添加请求拦截器：在发起请求之前
  //   axios.interceptors.request.use(function(config) {
  //     // console.log(config);
  //     // config里有两个属性用得上：headers，url
  //     // 根据接口文档要求，在发送请求(除登录请求外)之前，先设置请求头（验证请求权限）
  //     if (config.url !== "login") {
  //       const AUTH_TOKEN = localStorage.getItem("token");
  //       // 新写法：
  //       config.headers.Authorization = AUTH_TOKEN;
  //       // 旧写法：
  //       // this.$http.defaults.headers.common["Authorization"] = AUTH_TOKEN;
  //     }
  //     return config;
  //   });

  // 添加实例方法
  Vue.prototype.$http = axios
}

//   导出该对象
export default Http
