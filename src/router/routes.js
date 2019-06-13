import components from './components'
let mainRoute = [
  {
    path: '/',
    name: 'layout',
    isHidden: true,
    component: components['layout'],
    meta: {
      title: '首页'
    }
  }
]
let childrenRoutes = [
  {
    path: '/a',
    name: 'a',
    component: components['staffManage'],
    meta: {
      title: '人员管理',
      icon: 'iconfl-renyuan'
    },
    children: [
      {
        path: 'driver',
        name: 'driver',
        components: components['driver'],
        meta:{
          title: '司机管理',
          icon: 'iconsiji-'
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
    path: '/carManage',
    name: 'carManage',
    component: components['carManage'],
    meta: {
      title: '车辆管理',
      icon: 'iconcheliangguanli'
    }
  },
  {
    path: '/home',
    name: 'home',
    isHidden: true,
    component: components['homePage']
  }
]
// 合并子路由
mainRoute[0].children = childrenRoutes

export {childrenRoutes, mainRoute}
