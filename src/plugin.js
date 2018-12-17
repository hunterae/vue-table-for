// Adapted from https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html
import TableFor from './components/TableFor'
import PaginatedTableFor from './components/PaginatedTableFor'
import LocalPaginatedTableFor from './components/LocalPaginatedTableFor'
// import TableDataColumn from './components/TableDataColumn'
// import TableHeaderColumn from './components/TableHeaderColumn'

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('TableFor', TableFor)
  Vue.component('PaginatedTableFor', PaginatedTableFor)
  Vue.component('LocalPaginatedTableFor', LocalPaginatedTableFor)
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// To allow use as module (npm/webpack/etc.) export component
export default plugin

// To allow destructured imports
export { TableFor, PaginatedTableFor, LocalPaginatedTableFor }
