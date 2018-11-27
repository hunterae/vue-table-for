import TableFor from './components/TableFor'
import PaginatedTableFor from './components/PaginatedTableFor'
import LocalPaginatedTableFor from './components/LocalPaginatedTableFor'
// import TableDataColumn from './components/TableDataColumn'
// import TableHeaderColumn from './components/TableHeaderColumn'

export default {
  install(Vue) {
    Vue.component('TableFor', TableFor)
    Vue.component('PaginatedTableFor', PaginatedTableFor)
    Vue.component('LocalPaginatedTableFor', LocalPaginatedTableFor)
    // Vue.component('TableDataColumn', TableDataColumn)
    // Vue.component('TableHeaderColumn', TableHeaderColumn)
  }
}
