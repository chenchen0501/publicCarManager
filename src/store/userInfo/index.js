import {getDefaultRole} from '@/api/authority/staff'
import {login} from '@/api/user/user'
import {setToken, setUserInfo} from '@/utils/auth'
import router from '@/router'
import {toRoute, role1} from '@/router/routes'

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
    role: '',
    roleId: '',
    token: '',
    addRoutes: [], 
    asyncRoutes: [], // 后台返回的routes
    routes: toRoute
  },
  getters: {
    GET_ROUTES (state) {
      return state.routes
    },
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
    changeRoleId (state, newRoleId) {
      state.roleId = newRoleId
    },
    changeToken (state, token) {
      state.token = token
    },
    changeAddRoutes (state, routes) {
      state.addRoutes = routes
      state.routes = routes
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
          // 设置cookie中的token值
          setToken(res.data.token)
          commit('changeToken', res.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 拉取用户信息，并且获得对应的路由
    getUserInfo({commit}){
      return new Promise((resolve, rejcet) => {
        // 暂时写死用户信息
        let roleId = 1
        let role = '人事'
        let userName = '陈晨'
        let pw = 123123
        commit('changeUserName',userName)
        commit('changeNewPw', pw)
        commit('changeRoleId', roleId)
        commit('changDefaultRole', role)
        resolve()
      })
    },
    // 获取角色下的动态路由
    getAsyncRoutes ({commit, state}) {
      return new Promise((resolve, reject) => {
        // 写死返回的角色下的路由
        let syncRoutes = role1
        toRoute[0].children.push(...syncRoutes)
        commit('changeAddRoutes', toRoute)
        resolve()
      })
    }
  }
}

export default userInfo
