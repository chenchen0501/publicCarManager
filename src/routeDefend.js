import router from '@/router'
import {getToken} from '@/utils/auth'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  console.log('token', getToken())
  // cookie中有token则进入，没有进入登录界面
  if (getToken()) {
    next('/')
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      next()
    }
  }
})
