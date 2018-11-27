<template>
  <LocalPaginatedTableFor
    class="table table-hover 
      table-striped table-bordered"
    :records="records">
    <td name="first_name" />
    <td name="last_name" />
    <td name="email" />
  </LocalPaginatedTableFor>
</template>

<script>
import samplePeopleRecords from '../people.json'
export default {
  data () {
    return {
      records: samplePeopleRecords
    }
  }
}
</script>
