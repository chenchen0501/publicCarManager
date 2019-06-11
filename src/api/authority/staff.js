import request from '@/utils/authorityRequest'

export function getCarList (params) {
  return request({
    url: '/carPage',
    method: 'get',
    params
  })
}
export function addCar (data) {
  return request({
    url: '/addCar',
    method: 'post',
    data
  })
}
