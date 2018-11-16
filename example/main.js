import Vue from 'vue'
import App from './App.vue'
import TableFor from '../src/plugin.js'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

Vue.use(TableFor)

new Vue({ // eslint-disable no-unused-vars
  render: h => h(App)
}).$mount('#app')