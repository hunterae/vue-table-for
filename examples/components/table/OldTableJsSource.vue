<template functional>
  <pre>
      import axios from 'axios'
      export default {
        data() {
          <text-node
  v-if="props.tableOptions.dataRowOptions === 'fourValueCycle'"
>
            let cycleWithFourStates = ['success', 'error', 'warning', 'info']
          </text-node>
          <text-node v-if="props.tableOptions.dataRowOptions === 'evenOddCycle'">
            let cycleWithTwoStates = ['even', 'odd']
          </text-node>
          return {
            records: [],
            <text-node v-if="props.manualPagination">
              currentPage: 1,
            </text-node>
            <text-node v-if="props.paginated">
              perPage: {{ props.perPage }},
            </text-node>
            <text-node v-if="props.tableOptions.dataRowOptions === 'fourValueCycle'">
              fourValueCycle: record => {
                let rowClass = cycleWithFourStates.shift()
                cycleWithFourStates.push(rowClass)
                return {
                  class: rowClass,
                  id: `row-${record.id}`
                }
              }
            </text-node>
            <text-node v-if="props.tableOptions.dataRowOptions === 'evenOddCycle'">
              evenOddCycle: record => {
                let rowClass = cycleWithTwoStates.shift()
                cycleWithTwoStates.push(rowClass)
                return {
                  class: rowClass,
                  id: `row-${record.id}`
                }
              }
            </text-node>
          }
        },
        computed: {
          <text-node v-if="props.manualPagination">
            totalPages() {
              return Math.ceil(
                this.records.length /
                this.perPage
              )
            },
            currentPageRecords() {
              let recordOffset = 
                (this.currentPage - 1) * 
                this.perPage
              return this.records.slice(
                recordOffset,
                recordOffset +
                this.perPage
              )
            }
          </text-node>
        },
        methods: {
          <text-node v-if="props.manualPagination">
          setCurrentPage(currentPage) {
            this.currentPage = currentPage
          },
          </text-node>
          <text-node v-if="props.columns.id">
          linkClicked(record) {
            event.preventDefault()
            alert(`Link Clicked for record ${record.id}`)
          },
          </text-node>
          <text-node v-if="props.emailFormattersPresent">
          email(value) {
            return this.$createElement(
              'a',
              { attrs: { href: `mailto:${value}` } },
              value
            )
          },
          </text-node>
          <text-node v-if="props.upperFormattersPresent">
          upper: v => v.toUpperCase(),
          </text-node>
          <text-node v-if="props.lowerFormattersPresent">
          lower: v => v.toLowerCase()
          </text-node>
        },
        mounted() {
          axios.get('https://raw.githubusercontent.com/hunterae/vue-table-for/master/examples/people.json')
            .then(response => {
              this.records = response.data
            })
        }
      }
    </pre>
</template>

<script>
export default {
  props: {
    lowerFormattersPresent: Boolean,
    upperFormattersPresent: Boolean,
    emailFormattersPresent: Boolean,
    columns: Object,
    paginated: Boolean,
    perPage: Number,
    manualPagination: Boolean,
    automaticPagination: Boolean,
    tableOptions: Object
  }
}
</script>

<style></style>
