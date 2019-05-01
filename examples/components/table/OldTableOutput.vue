<template>
  <v-runtime-template :template="htmlSourceCode" />
</template>

<script>
import VRuntimeTemplate from 'v-runtime-template'

export default {
  components: {
    VRuntimeTemplate
  },
  props: {
    htmlSourceCode: {
      type: String,
      required: true
    },
    records: {
      type: Array,
      required: true
    },
    perPage: {
      type: Number
    }
  },
  methods: {
    setCurrentPage(currentPage) {
      this.currentPage = currentPage
    },
    linkClicked(record) {
      event.preventDefault()
      alert(`Link Clicked for record ${record.id}`)
    },
    email(value) {
      return this.$createElement(
        'a',
        { attrs: { href: `mailto:${value}` } },
        value
      )
    },
    upper: v => v.toUpperCase(),
    lower: v => v.toLowerCase()
  },
  data() {
    let cycleWithFourStates = ['success', 'error', 'warning', 'info']
    let cycleWithTwoStates = ['even', 'odd']
    return {
      currentPage: 1,
      fourValueCycle: record => {
        let rowClass = cycleWithFourStates.shift()
        cycleWithFourStates.push(rowClass)
        return {
          class: rowClass,
          id: `row-${record.id}`
        }
      },
      evenOddCycle: record => {
        let rowClass = cycleWithTwoStates.shift()
        cycleWithTwoStates.push(rowClass)
        return {
          class: rowClass,
          id: `row-${record.id}`
        }
      }
    }
  },
  computed: {
    totalColumns() {
      let selected = 0
      Object.values(this.columns).forEach(isSelected => {
        if (isSelected) {
          selected = selected + 1
        }
      })
      return selected
    },
    totalPages() {
      return Math.ceil(this.records.length / this.perPage)
    },
    currentPageRecords() {
      let recordOffset = (this.currentPage - 1) * this.perPage
      return this.records.slice(recordOffset, recordOffset + this.perPage)
    }
  }
}
</script>

<style>
tr.odd {
  background-color: #f9f9f9;
}
</style>
