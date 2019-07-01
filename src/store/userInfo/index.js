import {getDefaultRole} from '@/api/authority/staff'
import {login} from '@/api/user/user'
import {setToken, setUserInfo} from '@/utils/auth'
import router from '@/router'
import {toRoute} from '@/router/routes'

// 过滤路由，将后台返回的动态路由跟现有路由进行比较过滤
function filterRoutes (AllRoutes, permissionRoutes) {
  let afterFilterRoutes = []
  AllRoutes.forEach(ai => {
    permissionRoutes.forEach(pi => {
      if (ai.name === pi.name) {
        if (ai.children && ai.children.length > 0) {
          ai.children = filterRoutes(ai.children, pi.children)
        }
        afterFilterRoutes.push(ai)
      }
    })
  })
  return afterFilterRoutes
}
const userInfo = {
  state: {
    userName: '',
    pw: '',
    role: '司机',
    token: '',
    addRoutes: [], // 过滤后的rouets
    asyncRoutes: [], // 后台返回的routes
    // routes: childrenRoutes
  },
  getters: {
    GET_USERNAME (state) {
      return state.userName
    },
    GET_PW (state) {
      return state.pw
    },
    GET_ROLE (state) {
      return state.role
    },
    GET_TOKEN (state) {
      return state.token
    }
  },
  mutations: {
    changeUserName (state, name) {
      state.userName = name
    },
    // 修改新密码
    changeNewPw (state, newPw) {
      state.pw = newPw
    },
    changDefaultRole (state, newRole) {
      state.role = newRole
    },
    changeToken (state, token) {
      state.token = token
    },
    changeAddRoutes (state, routes) {
      state.addRoutes = routes
    },
    changeAsyncRoutes (state, routes) {
      state.asyncRoutes = routes
    }
  },
  actions: {
    // 切换当前角色
    changeNewRoleAction ({commit}) {
      getDefaultRole().then(res => {
        commit('changDefaultRole', res.data.role)
      })
    },
    // 登录，保存token
    login ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          // 设置cookie中的userInfo
          setUserInfo(userInfo)
          // 设置cookie中的token值
          setToken(res.data.token)
          commit('changeUserName', userInfo.userName)
          commit('changeNewPw', userInfo.pw)
          commit('changeToken', res.data.token)
          commit('changeAsyncRoutes', res.data.routes)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getAsyncRoutes ({commit, state}) {
      return new Promise((resolve, reject) => {
        login().then(res => {
        })
      })
    }
  }
}

export default userInfo
