<template>
  <TableFor class="table table-hover
    table-striped table-bordered"
    :records="records">
    <td name="first_name"></td>
    <td name="last_name"></td>
    <td name="full_name">
      <template slot-scope="{ record }">
        {{ record.first_name }}
        {{ record.last_name }}
      </template>
    </td>
    <td name="login" field="email"></td>
  </TableFor>
</template>

<script>
import samplePeopleRecords from '../../people.json'

export default {
  data() {
    return {
      records: samplePeopleRecords.slice(0, 10)
    }
  }
}
</script>
