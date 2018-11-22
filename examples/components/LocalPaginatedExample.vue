<template>
  <LocalPaginatedTableFor :records="records">
    <td name="first_name" />
    <td name="last_name" />
    <td name="email" />
  </LocalPaginatedTableFor>
</template>

<script>
export default {
  props: {
    records: Array
  }
}
</script>
