import axios from 'axios'
import { message } from 'antd'

let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('TOKEN')
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  (error) => {
    let messageContent = ''
    let status = error.response.status
    switch (status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        messageContent = '未登录'
        break
      // 403 token过期
      // 登录过期对用户进行提示
      // 清除本地token和清空vuex中token对象
      // 跳转登录页面
      case 403:
        messageContent = '登录过期，请重新登录'
        break
      case 404:
        messageContent = '网络请求不存在'
        break
      case 500:
        messageContent = '服务器出现问题'
        break
      default:
        messageContent = error.response.data.message
        break
    }
    message.error(messageContent)
    return Promise.reject(error)
  }
)

export default request
