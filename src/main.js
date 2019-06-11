// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.css'
import '@/icons/font/iconfont.css'
import '@/icons' // icon
Vue.use(ElementUI, {
  size: 'mini'
})
// import globalMethods from '@/utils/global'

Vue.config.productionTip = false
// Vue.prototype.globalMethods = globalMethods

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
