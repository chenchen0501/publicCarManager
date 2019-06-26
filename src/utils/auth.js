import Cookies from 'js-cookie'

const TokenKey = 'cc-Token'

// 设置token
export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

// 设置用户信息
export function setUserInfo (userInfo) {
  return Cookies.set('userInfo', userInfo)
}

export function getUserInfo () {
  return Cookies.get('userInfo')
}

export function removeUserInfo () {
  return Cookies.remove('userInfo')
}
