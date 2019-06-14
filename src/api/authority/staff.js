import request from '@/utils/authorityRequest'

// 车辆列表
export function getCarList (params) {
  return request({
    url: '/carPage',
    method: 'get',
    params
  })
}

// 新增车辆
export function addCar (data) {
  return request({
    url: '/addCar',
    method: 'post',
    data
  })
}

// 工资列表
export function salaryList (params) {
  return request({
    url: '/salary',
    method: 'get',
    params
  })
}
