import {getDefaultRole} from '@/api/authority/staff'
const userInfo = {
  state: {
    userName: '',
    pw: '',
    role: '司机'
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
    }
  },
  mutations: {
    // 修改新密码
    changeNewPw (state, newPw) {
      state.pw = newPw
    },
    changDefaultRole (state, newRole) {
      state.role = newRole
    }
  },
  actions: {
    changeNewRoleAction ({commit}) {
      getDefaultRole().then(res => {
        commit('changDefaultRole', res.data.role)
      })
    }
  }
}

export default userInfo
