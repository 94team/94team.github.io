// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // reset css iconfont
import router from './router'
import store from './store'
import axios from 'axios'
// import Toast from './components/toast'
// import { getToken } from '@/utils/auth'
Vue.config.productionTip = false
Vue.use(Element)
// Vue.prototype.$toast = Toast

const axiosIns = axios.create()
if (process.env.NODE_ENV === 'development') {
  axiosIns.defaults.baseURL = 'http://94team.com:8082'
}
// 添加请求拦截器
axiosIns.interceptors.request.use(function (config) {
  // Do something before request is sent
  // if (store.state.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config
}, function (error) {
  // 对请求错误做些什么
  console.log('错误的传参')
  return Promise.reject(error)
})

axiosIns.interceptors.response.use((res) => {
  // 对响应数据做些事
  if (!res.data) {
    return Promise.reject(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})
const ajaxMethod = ['get', 'post']
const api = {}
ajaxMethod.forEach((method) => {
  api[method] = function (uri, data, config) {
    return new Promise(function (resolve, reject) {
      axiosIns[method](uri, data, config).then((response) => {
        // if (response.data.code === 500) {
        //   if (instance.$store.state.badNetNum > 1) {
        //     instance.$notify({
        //       title: '温馨提示',
        //       message: response.data.msg,
        //       position: 'top-right'
        //     })
        //     instance.$store.state.badNetNum = 1
        //   }
        // } else if (response.data.code === 2000) {
        //   if (instance.$store.state.badNetNum > 1) {
        //     instance.$notify({
        //       title: '参数错误',
        //       message: response.data.msg,
        //       position: 'top-right'
        //     })
        //     instance.$store.state.badNetNum = 1
        //   }
        // } else if (response.data.code === 401) {
        //   if (instance.$store.state.badNetNum > 1) {
        //     instance.$notify({
        //       title: '温馨提示',
        //       message: '登录信息失效，请重新登陆',
        //       position: 'top-right'
        //     })
        //     instance.$store.state.badNetNum = 1
        //   }
        //   instance.$router.replace('/login')
        // } else if (response.data.code === 0) {
        //   resolve(response)
        // }
        resolve(response)
      }).catch(function (error) {
        if (error.response) {
          // 请求已发出，但服务器响应的状态码不在 2xx 范围内
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          console.log(error)
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
    })
  }
})
Vue.prototype.$axios = api
// const instance = new Vue
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
