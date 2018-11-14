import Vue from 'vue'
import App from './App.vue'
import TableFor from '../src/plugin.js'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/lib/highlight'

Vue.use(TableFor)
Vue.use(VueHighlightJS)

new Vue({ // eslint-disable no-unused-vars
  render: h => h(App)
}).$mount('#app')