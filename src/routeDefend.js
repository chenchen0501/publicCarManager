import router from '@/router'

router.beforeEach((to, from, next) => {
  console.log('to:', to)
  if (to.path === '/') {
    next('/home')
  } else {
    next()
  }
})
