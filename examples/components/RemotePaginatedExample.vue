<template>
  <PaginatedTableFor
    :records="records"
    :current-page.sync="currentPage"
    :total-pages="totalPages"
    class="table table-hover 
      table-striped table-bordered">
    <template slot-scope="{record}">
      <td name="first_name" />
      <td name="last_name" />
      <td name="image">
        <img :src="record.avatar" alt="Avatar" />
      </td>
    </template>
  </PaginatedTableFor>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      currentPage: 1,
      perPage: 4,
      totalPages: 0,
      records: []
    }
  },
  watch: {
    currentPage () {
      this.records = []
      this.fetchRecords()
    }
  },
  methods: {
    fetchRecords () {
      Axios.get('https://reqres.in/api/users', {
        params: {
          page: this.currentPage,
          per_page: this.perPage
        }}).then((response) => {
          let data = response.data
          this.totalPages = data.total_pages
          this.records = data.data
        })
    }
  },
  mounted () {
    this.fetchRecords()
  }
}
</script>
