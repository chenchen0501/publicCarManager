import router from '@/router'
import {getToken} from '@/utils/auth'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  console.log('token', getToken())
  // cookie中有token则进入，没有进入登录界面
  if (getToken()) {
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
