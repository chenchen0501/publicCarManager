import router from '@/router'
import {getToken} from '@/utils/auth'
import {childrenRoutes} from '@/router/routes'
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  console.log('token', getToken())
  // cookie中有token则进入，没有进入登录界面
  if (getToken()) {
    // console.log('初始路由', router.options.routes) // 获得初始路由
    if (from.path === 'login') {
      next('/')
    } else {
      next()
    }
  } else {
    console.log('to', to.path)
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
      next()
    }
  }
})
