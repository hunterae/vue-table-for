import Vue from 'vue'
import Router from 'vue-router'
import TableDemo from './components/TableDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Demo',
      path: '*',
      component: TableDemo
    }
  ]
})
