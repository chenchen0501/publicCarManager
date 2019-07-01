import components from './components'

let toRoute = [{
  path: '/to',
  name: 'to',
  component: components['layout'],
  children: [
  ]
}]

// 基础routes
let baseRoutes = [
  {
    path: '/layout',
    name: 'layout',
    isHidden: true,
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
    path: '/',
    isHidden: true,
    redirect: '/layout/home'
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
  // {
  //   path: 'a',
  //   name: 'a',
  //   component: components['staffManage'],
  //   meta: {
  //     title: '人员管理',
  //     icon: 'iconfl-renyuan'
  //   },
  //   children: [
  //     {
  //       path: 'driver',
  //       name: 'driver',
  //       component: components['driver'],
  //       meta: {
  //         title: '司机管理',
  //         icon: 'iconsiji-'
  //       }
  //     },
  //     {
  //       path: 'a1',
  //       name: 'a1',
  //       component: components['salary'],
  //       meta: {
  //         title: '工资管理',
  //         icon: 'iconwodegongzi'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: 'carManage',
  //   name: 'carManage',
  //   component: components['carManage'],
  //   meta: {
  //     title: '车辆管理',
  //     icon: 'iconcheliangguanli'
  //   }
  // }
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
