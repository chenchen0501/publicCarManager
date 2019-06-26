export default {
  layout: () => import('@/pages/layout'),
  login: () => import('@/pages/login'),
  404: () => import('@/pages/404'),
  staffManage: () => import('@/pages/staffManage'),
  salary: () => import('@/pages/salary'),
  carManage: () => import('@/pages/carManage'),
  homePage: () => import('@/pages/homePage'),
  driver: () => import('@/pages/drivers')
}
