import TableFor from './components/TableFor'
import PaginationLinks from './components/PaginationLinks'

const VueTableForPlugin = {
  install(Vue, options = {}) {
    // TODO: allow options to be specified for global settings
    Vue.component(options.alias || 'TableFor', TableFor)
  }
}

export default VueTableForPlugin

export { TableFor, PaginationLinks }

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTableForPlugin)
}
