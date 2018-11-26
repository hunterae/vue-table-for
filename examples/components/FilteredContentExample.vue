<template>
  <TableFor :records="records">
    <template slot-scope="{ record }">
      <td name="first_name"
        :formatter="$options.filters.lower" />
      <td name="full_name"
        :content="`${record.first_name}
                   ${record.last_name}`
                   | upper" />
      <td name="email"
        :formatter="formatEmail" />
    </template>
  </TableFor>
</template>

<script>
export default {
  props: {
    records: Array
  },
  methods: {
    formatEmail (value) {
      let t = "sdffsdf"
      console.log(t)
      return `<a href='mailto: ${value}'>${value}</a>`
    }
  },
  filters: {
    upper: v => v.toUpperCase(),
    lower: v => v.toLowerCase()
  }
}
</script>
