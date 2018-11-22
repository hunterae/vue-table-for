<template>
  <TableFor :records="records">
    <td name="first_name" />
    <td name="last_name" />
    <td name="email" />
  </TableFor>
</template>

<script>
export default {
  props: {
    records: Array
  }
}
</script>
