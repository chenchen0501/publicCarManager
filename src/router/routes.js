import components from './components'

const toRoute = [{
  path: '/to',
  name: 'to',
  component: components['layout'],
  children: []
}]

// 基础routes
let mainRoute = [
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
      },
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
let childrenRoutes = [
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
  {
    path: 'carManage',
    name: 'carManage',
    component: components['carManage'],
    meta: {
      title: '车辆管理',
      icon: 'iconcheliangguanli'
    }
  }
]
let role1 = [
  {
    path: 'driver',
    name: 'driver',
    component: components['driver'],
    meta: {
      title: '司机管理',
      icon: 'iconsiji-'
    }
  }
]
// 合并子路由
// mainRoute[0].children.push(...childrenRoutes)

export {childrenRoutes, mainRoute, toRoute, role1}
