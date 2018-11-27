<template>
  <TableFor
    :records="records"
    class="table table-hover 
      table-striped table-bordered">
    <td name="first_name" />
    <td name="last_name" />
    <td name="email" />
    <tfoot slot="footer" slot-scope="{ columns }">
      <tr>
        <td :colspan="columns.length">Custom Footer</td>
      </tr>
    </tfoot>

    <!-- Could also be accomplished without
      the slot-scope
    <tfoot slot="footer">
      <tr>
        <td colspan="3">Custom Footer</td>
      </tr>
    </tfoot> -->
  </TableFor>
</template>

<script>
import samplePeopleRecords from '../people.json'
export default {
  data () {
    return {
      records: samplePeopleRecords.slice(0, 10)
    }
  },
}
</script>



