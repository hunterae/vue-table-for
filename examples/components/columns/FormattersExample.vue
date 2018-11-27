<template>
  <TableFor
    :records="records"
    :formatter="$options.filters.upper"
    class="table table-hover
           table-striped table-bordered">
    <template slot-scope="{ record }">
      <td name="first_name"
        :formatter="$options.filters.lower"></td>
      <td name="last_name"></td>
      <td name="unformatted">Not Formatted</td>
      <td name="full_name"
        :content="`${record.first_name}
                   ${record.last_name}`"></td>
      <td name="email"
        :formatter="formatEmail" ></td>
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
  },
  methods: {
    formatEmail(value) {
      return `<a href='mailto:${value}'>${value}</a>`
      // or:
      // return this.$createElement(
      //   'a',
      //   { attrs: { href: `mailto:${value}` }},
      //   value
      // )
    }
  },
  filters: {
    upper: v => v.toUpperCase(),
    lower: v => v.toLowerCase()
  }
}
</script>
