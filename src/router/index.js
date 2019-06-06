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
          path: 'A',
          name: 'A',
          component: components['A'],
          children: [
            {
              path: 'A1',
              name: 'A1',
              component: components['A1'],
              children: [
                {
                  path: 'A11',
                  name: 'A11',
                  component: components['A11']
                }
              ]
            }
          ]
        },
        {
          path: 'B',
          name: 'B',
          component: components['B']
        }
      ]
    }
  ]
})
