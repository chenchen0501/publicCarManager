import components from './components'
let routes = [
  {
    path: '/',
    name: 'layout',
    isHidden: false,
    component: components['layout'],
    meta:{
      title: '首页'
    },
    children: [
      {
        path: 'a',
        name: 'a',
        component: components['A'],
        meta:{
          title: '页面A'
        },
        children: [
          {
            path: 'a1',
            name: 'a1',
            component: components['A1'],
            meta:{
              title: '页面A1'
            },
            children: [
              {
                path: 'a11',
                name: 'a11',
                component: components['A11'],
                meta:{
                  title: '页面A1'
                },
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/b',
    name: 'B',
    component: components['B'],
    meta:{
      title: '页面B'
    }
  }
]

export default routes