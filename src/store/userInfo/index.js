import {getDefaultRole} from '@/api/authority/staff'
import {login} from '@/api/user/user'
import {setToken, setUserInfo} from '@/utils/auth'
import router from '@/router'
import {childrenRoutes} from '@/router/routes'

const userInfo = {
  state: {
    userName: '',
    pw: '',
    role: '司机',
    token: '',
    addRoutes: []
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
          commit('changeAddRoutes', res.data.routes)

          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default userInfo
