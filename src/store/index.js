import userInfo from './userInfo'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    userInfo
  }
})

export default store