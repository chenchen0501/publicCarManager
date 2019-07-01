import router from '@/router'
import {getToken} from '@/utils/auth'
import {childrenRoutes, toRoute} from '@/router/routes'

import store from '@/store'

router.beforeEach((to, from, next) => {
<<<<<<< HEAD
=======
  console.log('from', from)
  console.log('to', to)

  if (from.path === '/') {
    let role1 = [{ // 这是我要加入的一个路由
      path: 'driver',
      name: 'driver',
      meta: {
        title: '司机管理',
        icon: 'iconsiji-'
      }
    }]

    router.addRoutes(role1)
    console.log('router', router.options.routes)
    next()
  } else {
    next()
  }
  // cookie中有token则进入，没有进入登录界面
  // if (getToken()) {
  //   next()
  // } else {
  //   // console.log('to', to.path)
  //   if (whiteList.includes(to.path)) {
  //     next()
  //   } else {
  //     next('/login')
  //     next()
  //   }
  // }
>>>>>>> bf09b7fa78b8a1b92e4a733d6b08fc3db0abf4be
})
