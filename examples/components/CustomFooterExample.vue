<template>
  <TableFor :records="records">
    <template slot-scope="{ record }">
      <td name="first_name" />
      <td name="last_name" />
      <td name="email" />
    </template>

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
export default {
  props: {
    records: Array
  }
}
</script>