import TableFor from './components/TableFor'
import PaginatedTableFor from './components/PaginatedTableFor'

export default {
  // Removing options untill some are avialable for the component (Vue, options = {})
  install (Vue) {
    Vue.component('TableFor', TableFor)
    Vue.component('PaginatedTableFor', PaginatedTableFor)
  }
}
