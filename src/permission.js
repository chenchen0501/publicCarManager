import router from '@/router'
import {getToken} from '@/utils/auth'
import {toRoute} from '@/router/routes'

import store from '@/store'

router.beforeEach((to, from, next) => {
  if(store.state.userInfo.addRoutes.length){
    router.addRoutes( toRoute )
  }
  next()
  console.log('routes:', router)
})
