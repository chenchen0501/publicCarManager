import router from '@/router'
import {getToken} from '@/utils/auth'
import {toRoute} from '@/router/routes'
import store from '@/store'

let whiteList = ['/login']

router.beforeEach((to, from, next) => {
  console.log('getToken:', getToken())
  if (getToken()) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.state.userInfo.addRoutes.length) {
        console.log('正在加路由')
        store.dispatch('getUserInfo').then(()=>{
          store.dispatch('getAsyncRoutes').then(() => {
            let addRoutes = store.state.userInfo.addRoutes
            console.log('addRoutes:', addRoutes)
            router.addRoutes(addRoutes)
            next({...to, replace: true})
          })
        })
      } else {
        console.log('已经加入路由')
        next()
      }
    }
  } else {
    if (whiteList.includes(to.path)) { // 跳过白名单
      next()
    } else {
      next('/login')
      next()
    }
  }
})
