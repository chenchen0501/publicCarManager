import {getDefaultRole} from '@/api/authority/staff'
import {login} from '@/api/user/user'
import {setToken} from '@/utils/auth'
const userInfo = {
  state: {
    userName: '',
    pw: '',
    role: '司机',
    token: ''
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
    // 修改新密码
    changeNewPw (state, newPw) {
      state.pw = newPw
    },
    changDefaultRole (state, newRole) {
      state.role = newRole
    },
    changeToken (state, token) {
      state.token = token
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
      login(userInfo).then(res => {
        // 设置cookie中的token值
        setToken(res.data.token)
        commit('changeToken', res.data.token)
      })
    }
  }
}

export default userInfo
