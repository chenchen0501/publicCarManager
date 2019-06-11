import request from '@/utils/authorityRequest'

export function getCarList (params) {
  return request({
    url: '/carPage',
    method: 'get',
    params
  })
}
