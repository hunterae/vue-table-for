<template>
  <TableFor
    :records="records"
    :header="{ formatter: $options.filters.upper }"
    :row="row"
    class="table table-hover table-bordered">
    <template slot-scope="{ record }">
      <td name="first_name"
        :header='false'
        :formatter="$options.filters.lower"
        class="text-danger" />
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
import samplePeopleRecords from '../people.json'

export default {
  data () {
    let rowCycle = ['success', 'error', 'warning', 'info']
    return {
      row: (record) => {
        let rowClass = rowCycle.shift()
        rowCycle.push(rowClass)
        return {
          class: rowClass,
          id: `row-${record.id}`
        }
      },
      records: samplePeopleRecords.slice(0, 10)
    }
  },
  methods: {
    formatEmail (value) {
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
