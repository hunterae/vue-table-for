<template>
  <PaginatedTableFor
    :records="currentPageRecords"
    :current-page.sync="currentPage"
    :total-pages="totalPages">
    <template slot-scope="{ record }">
      <td name="first_name" />
      <td name="last_name" />
      <td name="email" />
    </template>
  </PaginatedTableFor>
</template>

<script>
export default {
  props: {
    records: Array
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10
    }
  },
  computed: {
    currentPageRecords () {
      let recordOffset = (this.currentPage - 1) * this.perPage
      return this.records.slice(
        recordOffset,
        recordOffset + this.perPage
      )
    },
    totalPages () {
      return Math.ceil(this.records.length / this.perPage)
    }
  }
}
</script>