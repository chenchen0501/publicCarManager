
import request from '@/utils/authorityRequest'

// 获取token
export function login (params) {
  return request({
    url: '/login',
    method: 'get',
    params
  })
}
