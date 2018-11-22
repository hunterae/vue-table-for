<template>
  <TableFor :records="records">
    <template slot-scope="{ record }">
      <td name="name">
        {{ record.first_name }}
        {{ record.last_name }}
      </td>
      <td name="email"></td>
    </template>
  </TableFor>
</template>

<script>
export default {
  props: {
    records: Array
  }
}
</script>
