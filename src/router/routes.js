import components from './components'

let toRoute = [{
  path: '/to',
  name: 'to',
  component: components['layout'],
  children: [
    {
      path: 'home',
      name: 'home',
      component: components['homePage'],
      meta: {
        title: '首页'
      }
    }
  ]
}]

// 基础routes
let baseRoutes = [
  {
    path: '/',
    name: 'layout',
    isHidden: true,
    redirect: '/home',
    component: components['layout'],
    children: [
      {
        path: 'home',
        name: 'home',
        component: components['homePage'],
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    isHidden: true,
    component: components['login'],
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    name: '404',
    isHidden: true,
    component: components['404'],
    meta: {
      title: 'noFind'
    }
  }
]

// 全部routes
let syncRoutes = [
]

let role1 = [
    {
    path: 'car',
    name: 'carManage',
    component: components['carManage'],
    meta: {
      title: '车辆管理',
      icon: 'iconcheliangguanli'
    }
  }
]

let role2 = [
  {
    path: 'a1',
    name: 'a1',
    component: components['salary'],
    meta: {
      title: '工资管理',
      icon: 'iconwodegongzi'
    }
  }
]
export {baseRoutes, syncRoutes, toRoute, role1, role2}
