export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 10
    },
    records: {
      type: Array,
      required: true
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

  watch: {
    totalPages: {
      handler() {
        this.$emit('update:totalPages', this.totalPages)
      },
      immediate: true
    },
    currentPageRecords: {
      handler() {
        this.$emit('update:currentPageRecords', this.currentPageRecords)
      },
      immediate: true
    }
  },

  render() {
    return null
  }
}
