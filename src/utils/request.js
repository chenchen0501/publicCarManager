import axios from 'axios'
import qs from 'qs'
import {
  Message,
  MessageBox
} from 'element-ui'

// 创建axios实例
export default function createService (baseURL) {
  const service = axios.create({
    baseURL: baseURL,
    timeout: 100000 // 请求超时时间
  })
  // request拦截器
  service.interceptors.request.use(config => {
    // 处理axios get请求数组多了[]的问题
    if (config.method === 'get') {
      if (config.params) {
        config.paramsSerializer = (params) => {
          return qs.stringify(params, {
            indices: false
          })
        }
      }
    }
    return config
  }, error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  })

  // response拦截器
  service.interceptors.response.use(
    response => {
      /**
       * code为非20000是抛错 可结合自己业务进行修改
       */
      const res = response.data
      if (res.code && res.code === 'UNIQUEERROR') {
        return Promise.reject(res)
      } else if (res.code && res.code !== 'SUCCESS') {
        Message({
          message: res.message,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(res)
      } else {
        return response.data
      }
    },
    error => {
      Message({
        message: error,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )
  return service
}
