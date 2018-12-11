<template>
  <TableFor
    class="table table-hover table-striped table-bordered"
    :records="records"
  >
    <template slot-scope="{ record }">
      <td name="name">{{ record.first_name }} {{ record.last_name }}</td>
      <td
        name="printed_name"
        :content="
          `${record.last_name}, 
                   ${record.first_name}`
        "
      ></td>
      <td name="login">{{ record.email }}</td>
    </template>
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
