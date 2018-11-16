<template>
  <TableFor :records="records">
    <template slot-scope="{ record }">
      <td name="first_name" />
      <td name="last_name" />
      <td name="email" />
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
