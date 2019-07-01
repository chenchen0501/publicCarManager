import router from '@/router'
import {getToken} from '@/utils/auth'
import {childrenRoutes} from '@/router/routes'
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
})
