<script>
import flattenDeep from 'lodash/flattenDeep'
import TableDataColumn from '@/components/TableDataColumn'
import TableHeaderColumn from '@/components/TableHeaderColumn'
import deepMerge from 'deepmerge'

export default {
  components: {
    TableDataColumn,
    TableHeaderColumn
  },
  props: {
    records: {
      type: Array,
      required: true
    },
    recordVariable: {
      type: String,
      default: 'record'
    }
  },
  methods: {
    // This method is a WIP. It will be updated shortly to utilize a separate Vue Plugin I am
    //  writing called vue-slot-hooks
    renderFirstSlotOrChildrenWithHooks ({ tag, children = [], wrapper = null, data = {}, slotName = null } = {}) {
      let slots = null
      if (slotName) {
        slots = this.$slots[slotName]
      }

      if (slots) {
        let slot = slots[0]
        return this.$createElement(slot.tag, deepMerge(data, slot.data), slot.children)
        // return this.$createElement(RenderWithHooks, deepMerge(slot.data || {}, { props: { suffix: `_${slotName}`, tag: slot.tag, wrapper: wrapper } }), slot.children)
      } else {
        return this.$createElement(tag, data, children)
        // return this.$createElement(RenderWithHooks, { props: { suffix: `_${slotName}`, tag: tag, wrapper: wrapper } }, children)
      }
    }
  },
  render (createElement) {
    let columns, headerColumns, dataRows, footer
    let scopedSlot = this.$scopedSlots.default
    // debugger
    if (scopedSlot) {
      let proxyHash = new Proxy({}, {
        get: function (object, property) {
          return ''
        }
      })
      columns = flattenDeep(scopedSlot({ [this.recordVariable]: proxyHash, table: this }))
      headerColumns = columns.map((column) => {
        if (column.tag === 'td') {
          let headerOptions = deepMerge.all([column.data, { props: column.data.attrs }, { attrs: { header: undefined, name: undefined } } ])
          return this.renderFirstSlotOrChildrenWithHooks({ slotName: column.data.attrs.name, tag: TableHeaderColumn, data: headerOptions })
        }
      })
      dataRows = this.$props.records.map((record) => {
        columns = flattenDeep(scopedSlot({ [this.recordVariable]: record, table: this }))
        return createElement('tr', columns.map((column) => {
          if (column.tag === 'td') {
            return createElement(TableDataColumn, deepMerge.all([column.data, { attrs: { header: undefined, name: undefined } }, { props: { ...this.$props, ...column.data.attrs, record: record } }]), column.children)
          }
        }))
      })
    } else {
      columns = this.$slots.default
      headerColumns = columns.map((column) => {
        if (column.tag === 'td') {
          let headerOptions = deepMerge.all([column.data, { props: column.data.attrs }, { attrs: { header: undefined, name: undefined } } ])
          return this.renderFirstSlotOrChildrenWithHooks({ slotName: column.data.attrs.name, tag: TableHeaderColumn, data: headerOptions })
        }
      })
      dataRows = this.$props.records.map((record) => {
        return createElement('tr', columns.map((column) => {
          if (column.tag === 'td') {
            return createElement(TableDataColumn, deepMerge.all([column.data, { attrs: { header: undefined, name: undefined } }, { props: { ...this.$props, ...column.data.attrs, record: record } }]), column.children)
          }
        }))
      })
    }

    // let header = this.renderFirstSlotOrChildrenWithHooks({ slotName: 'header', tag: 'tr', children: headerColumns, wrapper: 'thead' })
    let header = createElement('thead', [createElement('tr', headerColumns)])
    // let body = this.renderFirstSlotOrChildrenWithHooks({ slotName: 'body', tag: 'tbody', children: dataRows })
    let body = createElement('tbody', dataRows)

    if (this.$scopedSlots.footer) {
      footer = this.$scopedSlots.footer({ columns: headerColumns, table: this })
    } else if (this.$slots.footer) {
      footer = this.$slots.footer
    }

    return createElement('table', this.$attrs, [
      header,
      body,
      footer
    ])
  }
}
</script>
