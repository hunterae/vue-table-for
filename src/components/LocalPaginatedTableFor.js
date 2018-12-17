import PaginatedTableFor from './PaginatedTableFor'
import { omit, flatten } from '../utils/Helpers'
// import omit from 'lodash/omit'
// import flatten from 'lodash/flatten'

export default {
  components: {
    PaginatedTableFor
  },
  props: {
    ...omit(PaginatedTableFor.props, ['currentPage', 'totalPages']),
    perPage: {
      type: Number,
      default: 10
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.records.length / this.perPage)
    },
    currentPageRecords() {
      let recordOffset = (this.currentPage - 1) * this.perPage
      return this.records.slice(recordOffset, recordOffset + this.perPage)
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    handleUpdatePage(page) {
      this.currentPage = page
    }
  },
  render(createElement) {
    let mapSlotsToChildren = slots => {
      return flatten(Object.values(slots)).map(slot => {
        return createElement(slot.tag, slot.data, slot.children)
      })
    }

    return createElement(
      PaginatedTableFor,
      {
        scopedSlots: this.$scopedSlots,
        props: {
          ...this.$props,
          records: this.currentPageRecords,
          currentPage: this.currentPage,
          totalPages: this.totalPages
        },
        attrs: this.$attrs,
        on: { 'update:currentPage': this.handleUpdatePage }
      },
      [...mapSlotsToChildren(this.$slots)]
    )
  }
}
