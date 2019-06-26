
import request from '@/utils/authorityRequest'

// 获取token
export function login () {
  return request({
    url: '/login',
    method: 'get'
  })
}
