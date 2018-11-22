import TableFor from './components/TableFor'
import PaginatedTableFor from './components/PaginatedTableFor'
import LocalPaginatedTableFor from './components/LocalPaginatedTableFor'

export default {
  // Removing options until some are avialable for the component (Vue, options = {})
  install (Vue) {
    Vue.component('TableFor', TableFor)
    Vue.component('PaginatedTableFor', PaginatedTableFor)
    Vue.component('LocalPaginatedTableFor', LocalPaginatedTableFor)
  }
}
