<template functional>
  <pre>
      import axios from 'axios'
      export default {
        data() {
          <text-element v-if="props.tableOptions.dataRowOptions === 'fourValueCycle'">
            let cycleWithFourStates = ['success', 'error', 'warning', 'info']
          </text-element>
          <text-element v-if="props.tableOptions.dataRowOptions === 'evenOddCycle'">
            let cycleWithTwoStates = ['even', 'odd']
          </text-element>
          return {
            records: [],
            <text-element v-if="props.manualPagination">
              currentPage: 1,
            </text-element>
            <text-element v-if="props.paginated">
              perPage: {{ props.perPage }},
            </text-element>
            <text-element v-if="props.tableOptions.dataRowOptions === 'fourValueCycle'">
              fourValueCycle: record => {
                let rowClass = cycleWithFourStates.shift()
                cycleWithFourStates.push(rowClass)
                return {
                  class: rowClass,
                  id: `row-${record.id}`
                }
              }
            </text-element>
            <text-element v-if="props.tableOptions.dataRowOptions === 'evenOddCycle'">
              evenOddCycle: record => {
                let rowClass = cycleWithTwoStates.shift()
                cycleWithTwoStates.push(rowClass)
                return {
                  class: rowClass,
                  id: `row-${record.id}`
                }
              }
            </text-element>
          }
        },
        computed: {
          <text-element v-if="props.manualPagination">
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
          </text-element>
        },
        methods: {
          <text-element v-if="props.manualPagination">
          setCurrentPage(currentPage) {
            this.currentPage = currentPage
          },
          </text-element>
          <text-element v-if="props.columns.id">
          linkClicked(record) {
            event.preventDefault()
            alert(`Link Clicked for record ${record.id}`)
          },
          </text-element>
          <text-element v-if="props.emailFormattersPresent">
          email(value) {
            return this.$createElement(
              'a',
              { attrs: { href: `mailto:${value}` } },
              value
            )
          },
          </text-element>
          <text-element v-if="props.upperFormattersPresent">
          upper: v => v.toUpperCase(),
          </text-element>
          <text-element v-if="props.lowerFormattersPresent">
          lower: v => v.toLowerCase()
          </text-element>
        },
        mounted() {
          axios.get('https://goo.gl/w71knn')
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
