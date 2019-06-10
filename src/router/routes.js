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
      title: '页面A'
    },
    children: [
      {
        path: 'a1',
        name: 'a1',
        component: components['A1'],
        meta: {
          title: '页面A1'
        },
        children: [
          {
            path: 'a11',
            name: 'a11',
            component: components['A11'],
            meta: {
              title: '页面A1'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/b',
    name: 'B',
    component: components['B'],
    meta: {
      title: '页面B'
    }
  }
]
// 合并子路由
mainRoute[0].children = childrenRoutes

export {childrenRoutes, mainRoute}
