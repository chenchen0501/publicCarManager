import Vue from 'vue'
import Router from 'vue-router'
import components from './components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: components['layout'],
      children: [
        {
          path: 'a',
          name: 'a',
          component: components['A'],
          children: [
            {
              path: 'a1',
              name: 'a1',
              component: components['A1'],
              children: [
                {
                  path: 'a11',
                  name: 'a11',
                  component: components['A11']
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
      component: components['B']
    }
  ]
})
