/*!
 *
 *  Developer Notes:
 *  Use code-splitting only in routers
 *  Use meta.layout to define a layout for the route
 *  Always add a name (single lowercase or sausage-case only)
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'presets',
      path: '/:preset?'
      // props: true
    }
  ]
})
