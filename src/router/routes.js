import components from './components'
let routes = [
  {
    path: '/',
    name: 'layout',
    isShow: false,
    component: components['layout'],
    // children: [
    //   {
    //     path: 'a',
    //     name: 'a',
    //     component: components['A'],
    //     children: [
    //       {
    //         path: 'a1',
    //         name: 'a1',
    //         component: components['A1'],
    //         children: [
    //           {
    //             path: 'a11',
    //             name: 'a11',
    //             component: components['A11']
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ]
  },
  {
    path: '/b',
    name: 'B',
    component: components['B']
  }
]

export default routes