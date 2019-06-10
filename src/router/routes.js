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
    component: components['A'],
    meta: {
      title: '人员管理',
      icon: 'iconfl-renyuan'
    },
    children: [
      {
        path: 'a1',
        name: 'a1',
        component: components['A1'],
        meta: {
          title: '工资管理',
          icon: 'iconwodegongzi'
        }
      }
    ]
  },
  {
    path: '/b',
    name: 'B',
    component: components['B'],
    meta: {
      title: '车辆管理',
      icon: 'iconcheliangguanli'
    }
  }
]
// 合并子路由
mainRoute[0].children = childrenRoutes

export {childrenRoutes, mainRoute}
