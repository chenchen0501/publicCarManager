// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.css'
import '@/styles/element-primary-color.scss'
import '@/icons/font/iconfont.css'
import '@/icons' // icon
import '@/routeDefend'
import store from '@/store'

Vue.use(ElementUI, {
  size: 'mini'
})
// import globalMethods from '@/utils/global'

Vue.config.productionTip = false
// Vue.prototype.globalMethods = globalMethods

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
