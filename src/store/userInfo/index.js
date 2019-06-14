const userInfo = {
  state: {
    userName: '',
    pw: '',
    role: '人事'
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
    async changeNewRoleAction ({commit}, newRole) {
      commit('changDefaultRole', newRole)
    }
  }
}

export default userInfo
