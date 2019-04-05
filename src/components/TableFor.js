import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import TableForPaginator from './TableForPaginator'
import { InheritSlots } from 'vue-inherit-slots'
import { pick } from 'vue-slot-hooks/src/utils/HelperUtils'

export default {
  props: {
    recordVariable: {
      type: String,
      default: 'record'
    },
    ...pick(TableHeader.props, ['header']),
    ...pick(TableBody.props, ['records', 'dataRow', 'formatter', 'body']),
    ...pick(TableFooter, ['paginationLinksInFooter']),
    ...TableForPaginator.props,
    paginated: {
      type: Boolean,
      default: false
    },
    paginateInternally: {
      type: Boolean,
      default: false
    },
    totalPages: {
      type: Number,
      default: 0
    }
    // TODO: implement a way to pass the columns in as an array of hashes
    // columns: Array
  },
  data() {
    return {
      currentPageRecords: [],
      pages: 0,
      page: 1
    }
  },
  watch: {
    currentPage: {
      handler() {
        this.page = this.currentPage
      },
      immediate: true
    },
    totalPages: {
      handler() {
        this.pages = this.totalPages
      },
      immediate: true
    },
    records: {
      handler() {
        this.currentPageRecords = this.records
      },
      immediate: true
    },
    paginated() {
      this.currentPageRecords = this.records
    }
  },
  methods: {
    handleUpdateTotalPages(totalPages) {
      this.pages = totalPages
    },
    handleUpdateCurrentPageRecords(records) {
      this.currentPageRecords = records
      this.$emit('update:currentPageRecords', records)
    },
    handleUpdateCurrentPage(currentPage) {
      this.page = currentPage
      this.$emit('update:currentPage', currentPage)
    }
  },
  render(h) {
    let scopedSlots = this.$scopedSlots || {}
    let paginator
    if (this.paginated) {
      if (this.paginateInternally) {
        paginator = h(TableForPaginator, {
          props: {
            ...pick(this.$props, Object.keys(TableForPaginator.props)),
            currentPage: this.page
          },
          on: {
            'update:totalPages': this.handleUpdateTotalPages,
            'update:currentPageRecords': this.handleUpdateCurrentPageRecords
          }
        })
      }
    }

    return h('table', {}, [
      paginator,
      h(
        TableHeader,
        {
          props: pick(this.$props, Object.keys(TableHeader.props)),
          scopedSlots
        },
        [h(InheritSlots, { props: { inheritDefaultSlot: true } })]
      ),
      h(
        TableBody,
        {
          props: {
            ...pick(this.$props, Object.keys(TableBody.props)),
            records: this.currentPageRecords
          },
          scopedSlots
        },
        [h(InheritSlots, { props: { inheritDefaultSlot: true } })]
      ),
      h(
        TableFooter,
        {
          props: {
            ...pick(this.$props, Object.keys(TableFooter.props)),
            currentPage: this.page,
            totalPages: this.pages
          },
          on: {
            'update:currentPage': this.handleUpdateCurrentPage
          },
          scopedSlots
        },
        [h(InheritSlots, { props: { inheritDefaultSlot: true } })]
      )
    ])
  }
}
