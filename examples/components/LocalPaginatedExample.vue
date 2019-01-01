<template>
  <TableFor
    class="table table-hover 
      table-striped table-bordered"
    :records="records" paginated paginate-internally>
    <td name="first_name" />
    <td name="last_name" />
    <td name="email" />
  </TableFor>
</template>

<script>
import samplePeopleRecords from '../people.json'
export default {
  data() {
    return {
      records: samplePeopleRecords
    }
  }
}
</script>
