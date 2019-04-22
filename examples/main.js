import Vue from 'vue'
import App from './App.vue'
import TableFor from '../src/plugin.js'
import router from './router'
import ga from 'vue-ga'
import VueSourceCodeBuilder from 'vue-source-code-builder'
import 'prismjs/themes/prism-tomorrow.css'

Vue.use(TableFor)
Vue.use(VueSourceCodeBuilder)

if (process.env.NODE_ENV === 'production') {
  ga(router, 'UA-134944564-1')
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
