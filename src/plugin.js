import TableFor from './components/TableFor'
import PaginatedTableFor from './components/PaginatedTableFor'

export default {
  install (Vue, options) {
     Vue.component('TableFor', TableFor)
     Vue.component('PaginatedTableFor', PaginatedTableFor)
  }
}
