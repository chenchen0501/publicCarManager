const userInfo = {
  state: {
    userName: '',
    pw: '',
    roleId: ''
  },
  getters: {
    GET_USERNAME (state) {
      return state.userName
    },
    GET_PW (state) {
      return state.pw
    },
    GET_ROLEID (state) {
      return state.roleId
    }
  },
  mutations: {

  },
  actions: {

  }
}

export default userInfo
